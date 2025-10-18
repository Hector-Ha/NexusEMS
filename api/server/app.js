require("dotenv").config({ path: "env.env" });
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { GraphQLDateTime } = require("graphql-scalars");
const {
  emsConnect,
  dbListStaff,
  dbAddStaff,
  dbGetStaffById,
  dbUpdateStaff,
  dbDeleteStaff,
} = require("./db");
const cors = require("cors");

const app = express();
const PORT = process.env.API_SERVER_PORT || 4000;
const enableCors = process.env.ENABLE_CORS === "true";

// Apply CORS middleware before Apollo
app.use(
  cors({
    origin: "http://localhost:3000", // Allow the frontend origin
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

const staffSchema = gql`
  scalar DateTime

  type RetirementInfo {
    retirementDate: DateTime!
    daysUntilRetirement: Int!
    monthsUntilRetirement: Int!
    yearsUntilRetirement: Int!
    isRetired: Boolean!
    totalDaysUntilRetirement: Int! # Added for debugging
  }

  type Staff {
    _id: ID!
    FirstName: String!
    LastName: String!
    Age: Int!
    DateOfJoining: DateTime!
    Title: String!
    Department: String!
    EmployeeType: String!
    CurrentStatus: Boolean!
    retirementInfo: RetirementInfo
  }

  type Query {
    staffList(filter: String): [Staff!]!
    staffById(id: ID!): Staff
    upcomingRetirementList(filter: String): [Staff!]!
  }

  type Mutation {
    createStaff(
      FirstName: String!
      LastName: String!
      Age: Int!
      DateOfJoining: DateTime!
      Title: String!
      Department: String!
      EmployeeType: String!
    ): Staff
    updateStaff(
      id: ID!
      Title: String
      Department: String
      CurrentStatus: Boolean
    ): Staff
    deleteStaff(id: ID!): Boolean
  }
`;

// Function to calculate retirement information
function calculateRetirementInfo(employee) {
  const RETIREMENT_AGE = 65;
  const joiningDate = new Date(employee.DateOfJoining);
  const currentDate = new Date();

  // Calculate years since joining
  const yearsSinceJoining = currentDate.getFullYear() - joiningDate.getFullYear();
  const hasPassedBirthday =
    currentDate.getMonth() > joiningDate.getMonth() ||
    (currentDate.getMonth() === joiningDate.getMonth() &&
      currentDate.getDate() >= joiningDate.getDate());

  // Calculate age at joining (approximately)
  const currentAge = employee.Age;
  const ageAtJoining =
    currentAge - (hasPassedBirthday ? yearsSinceJoining : yearsSinceJoining - 1);

  // Calculate retirement date
  const retirementDate = new Date(joiningDate);
  const yearsToWork = RETIREMENT_AGE - ageAtJoining;
  retirementDate.setFullYear(joiningDate.getFullYear() + yearsToWork);

  // Check if already retired
  const isRetired = currentDate >= retirementDate;

  if (isRetired) {
    return {
      retirementDate,
      daysUntilRetirement: 0,
      monthsUntilRetirement: 0,
      yearsUntilRetirement: 0,
      isRetired: true,
      totalDaysUntilRetirement: 0,
    };
  }

  // Calculate time until retirement
  let years = 0;
  let months = 0;
  let days = 0;
  let workingDate = new Date(currentDate);

  // Calculate full years
  while (true) {
    const nextYear = new Date(workingDate);
    nextYear.setFullYear(workingDate.getFullYear() + 1);
    if (nextYear <= retirementDate) {
      years++;
      workingDate = nextYear;
    } else {
      break;
    }
  }

  // Calculate full months with day adjustment
  while (true) {
    const nextMonth = new Date(workingDate);
    nextMonth.setMonth(workingDate.getMonth() + 1);
    if (nextMonth.getDate() !== workingDate.getDate()) {
      nextMonth.setDate(0); // Last day of previous month
    }
    if (nextMonth <= retirementDate) {
      months++;
      workingDate = nextMonth;
    } else {
      break;
    }
  }

  // Calculate remaining days
  const timeDiff = retirementDate.getTime() - workingDate.getTime();
  days = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Total days for reference
  const totalDaysUntilRetirement = Math.ceil(
    (retirementDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
  );

  return {
    retirementDate,
    daysUntilRetirement: Math.max(0, days),
    monthsUntilRetirement: months,
    yearsUntilRetirement: years,
    isRetired: false,
    totalDaysUntilRetirement,
  };
}

const staffResolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    staffList: async (_, { filter }) => {
      let query = dbListStaff();
      if (filter && filter !== "All") {
        query = query.where("EmployeeType").equals(filter);
      }
      return await query.lean();
    },
    staffById: async (_, { id }) => {
      const employee = await dbGetStaffById(id);
      if (!employee) return null;
      const retirementInfo = calculateRetirementInfo(employee);
      return { ...employee, retirementInfo };
    },
    upcomingRetirementList: async (_, { filter }) => {
      let query = dbListStaff();
      if (filter && filter !== "All") {
        query = query.where("EmployeeType").equals(filter);
      }
      const allEmployees = await query.lean();

      const upcomingRetirements = allEmployees
        .map((employee) => {
          const retirementInfo = calculateRetirementInfo(employee);
          return { ...employee, retirementInfo };
        })
        .filter((employee) => {
          if (employee.retirementInfo.isRetired) return false;
          const totalMonthsUntilRetirement =
            employee.retirementInfo.yearsUntilRetirement * 12 +
            employee.retirementInfo.monthsUntilRetirement;
          return totalMonthsUntilRetirement <= 6;
        });

      return upcomingRetirements;
    },
  },
  Mutation: {
    createStaff: async (_, args) => await dbAddStaff(args),
    updateStaff: async (_, { id, Title, Department, CurrentStatus }) => {
      const update = {};
      if (Title) update.Title = Title;
      if (Department) update.Department = Department;
      if (CurrentStatus !== undefined) update.CurrentStatus = CurrentStatus;
      return await dbUpdateStaff(id, update);
    },
    deleteStaff: async (_, { id }) => {
      try {
        return await dbDeleteStaff(id);
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

async function launchEMSServer() {
  const server = new ApolloServer({
    typeDefs: staffSchema,
    resolvers: staffResolvers,
    cors: false,
  });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  await emsConnect();
  app.listen(PORT, () => {
    console.log(`EMS Server running at http://localhost:${PORT}`);
    console.log(`GraphQL endpoint at http://localhost:${PORT}/graphql`);
  });
}

launchEMSServer();