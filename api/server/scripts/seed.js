const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../env.env") });
const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

const staffSchema = new mongoose.Schema(
  {
    FirstName: { type: String, required: true, trim: true },
    LastName: { type: String, required: true, trim: true },
    Age: { type: Number, required: true, min: 20, max: 70 },
    DateOfJoining: { type: Date, required: true },
    Title: { type: String, required: true, enum: ["Employee", "Manager", "Director", "VP"] },
    Department: { type: String, required: true, enum: ["IT", "Marketing", "HR", "Engineering"] },
    EmployeeType: { type: String, required: true, enum: ["FullTime", "PartTime", "Contract", "Seasonal"] },
    CurrentStatus: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Staff = mongoose.model("Staff", staffSchema);

function randomDate(startYear, endYear) {
  const start = new Date(startYear, 0, 1);
  const end = new Date(endYear, 11, 31);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function daysAgo(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
}

function monthsAgo(months) {
  const date = new Date();
  date.setMonth(date.getMonth() - months);
  return date;
}

function yearsAgo(years) {
  const date = new Date();
  date.setFullYear(date.getFullYear() - years);
  return date;
}

const titles = ["Employee", "Manager", "Director", "VP"];
const departments = ["IT", "Marketing", "HR", "Engineering"];
const employeeTypes = ["FullTime", "PartTime", "Contract", "Seasonal"];

const firstNames = [
  "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda",
  "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica",
  "Thomas", "Sarah", "Charles", "Karen", "Christopher", "Nancy", "Daniel", "Lisa",
  "Matthew", "Betty", "Anthony", "Margaret", "Mark", "Sandra", "Donald", "Ashley",
  "Steven", "Kimberly", "Paul", "Emily", "Andrew", "Donna", "Joshua", "Michelle",
  "Kenneth", "Dorothy", "Kevin", "Carol", "Brian", "Amanda", "George", "Melissa"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
  "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
  "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson",
  "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker",
  "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores"
];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const seedData = [
  // ========== RETIREMENT CASES ==========
  
  // 1. Employee retiring in less than 1 month (age 64, joined ~44 years ago)
  {
    FirstName: "Harold",
    LastName: "Pension",
    Age: 64,
    DateOfJoining: yearsAgo(44),
    Title: "VP",
    Department: "Engineering",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 2. Employee retiring in 1-3 months
  {
    FirstName: "Margaret",
    LastName: "Retiring",
    Age: 64,
    DateOfJoining: (() => {
      const d = yearsAgo(43);
      d.setMonth(d.getMonth() + 2);
      return d;
    })(),
    Title: "Director",
    Department: "HR",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 3. Employee retiring in 3-6 months
  {
    FirstName: "Robert",
    LastName: "SoonGone",
    Age: 64,
    DateOfJoining: (() => {
      const d = yearsAgo(42);
      d.setMonth(d.getMonth() + 6);
      return d;
    })(),
    Title: "Manager",
    Department: "IT",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 4. Employee retiring in exactly 6 months (edge case)
  {
    FirstName: "Susan",
    LastName: "EdgeCase",
    Age: 64,
    DateOfJoining: (() => {
      const d = yearsAgo(41);
      d.setMonth(d.getMonth() - 6);
      return d;
    })(),
    Title: "Employee",
    Department: "Marketing",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 5. Employee NOT retiring soon (many years left)
  {
    FirstName: "Young",
    LastName: "Professional",
    Age: 25,
    DateOfJoining: monthsAgo(6),
    Title: "Employee",
    Department: "Engineering",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // ========== AGE BOUNDARY CASES ==========
  
  // 6. Minimum age (20)
  {
    FirstName: "Junior",
    LastName: "Youngest",
    Age: 20,
    DateOfJoining: daysAgo(30),
    Title: "Employee",
    Department: "IT",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 7. Maximum age (70)
  {
    FirstName: "Elder",
    LastName: "Statesman",
    Age: 70,
    DateOfJoining: yearsAgo(45),
    Title: "VP",
    Department: "HR",
    EmployeeType: "FullTime",
    CurrentStatus: false,
  },
  
  // 8. Mid-career age
  {
    FirstName: "Middle",
    LastName: "Career",
    Age: 45,
    DateOfJoining: yearsAgo(15),
    Title: "Manager",
    Department: "Marketing",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // ========== ALL TITLE TYPES ==========
  
  // 9. Employee title
  {
    FirstName: "Basic",
    LastName: "Worker",
    Age: 28,
    DateOfJoining: yearsAgo(2),
    Title: "Employee",
    Department: "Engineering",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 10. Manager title
  {
    FirstName: "Team",
    LastName: "Leader",
    Age: 35,
    DateOfJoining: yearsAgo(8),
    Title: "Manager",
    Department: "IT",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 11. Director title
  {
    FirstName: "Senior",
    LastName: "Executive",
    Age: 50,
    DateOfJoining: yearsAgo(20),
    Title: "Director",
    Department: "Marketing",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 12. VP title
  {
    FirstName: "Vice",
    LastName: "President",
    Age: 55,
    DateOfJoining: yearsAgo(25),
    Title: "VP",
    Department: "HR",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // ========== ALL DEPARTMENT TYPES ==========
  
  // 13. IT Department
  {
    FirstName: "Tech",
    LastName: "Developer",
    Age: 30,
    DateOfJoining: yearsAgo(5),
    Title: "Employee",
    Department: "IT",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 14. Marketing Department
  {
    FirstName: "Brand",
    LastName: "Manager",
    Age: 32,
    DateOfJoining: yearsAgo(4),
    Title: "Employee",
    Department: "Marketing",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 15. HR Department
  {
    FirstName: "Human",
    LastName: "Resources",
    Age: 40,
    DateOfJoining: yearsAgo(10),
    Title: "Manager",
    Department: "HR",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 16. Engineering Department
  {
    FirstName: "System",
    LastName: "Architect",
    Age: 38,
    DateOfJoining: yearsAgo(12),
    Title: "Employee",
    Department: "Engineering",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // ========== ALL EMPLOYEE TYPES ==========
  
  // 17. FullTime
  {
    FirstName: "Full",
    LastName: "Timer",
    Age: 33,
    DateOfJoining: yearsAgo(6),
    Title: "Employee",
    Department: "IT",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 18. PartTime
  {
    FirstName: "Part",
    LastName: "Timer",
    Age: 22,
    DateOfJoining: monthsAgo(8),
    Title: "Employee",
    Department: "Marketing",
    EmployeeType: "PartTime",
    CurrentStatus: true,
  },
  
  // 19. Contract
  {
    FirstName: "Contract",
    LastName: "Worker",
    Age: 42,
    DateOfJoining: monthsAgo(3),
    Title: "Employee",
    Department: "Engineering",
    EmployeeType: "Contract",
    CurrentStatus: true,
  },
  
  // 20. Seasonal
  {
    FirstName: "Seasonal",
    LastName: "Helper",
    Age: 24,
    DateOfJoining: daysAgo(60),
    Title: "Employee",
    Department: "HR",
    EmployeeType: "Seasonal",
    CurrentStatus: true,
  },
  
  // ========== STATUS CASES ==========
  
  // 21. Active employee (can't be deleted)
  {
    FirstName: "Active",
    LastName: "Employee",
    Age: 35,
    DateOfJoining: yearsAgo(5),
    Title: "Employee",
    Department: "IT",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 22. Inactive employee (can be deleted)
  {
    FirstName: "Inactive",
    LastName: "Former",
    Age: 45,
    DateOfJoining: yearsAgo(15),
    Title: "Manager",
    Department: "Marketing",
    EmployeeType: "FullTime",
    CurrentStatus: false,
  },
  
  // 23. Another inactive for delete testing
  {
    FirstName: "Deletable",
    LastName: "Person",
    Age: 50,
    DateOfJoining: yearsAgo(20),
    Title: "Employee",
    Department: "HR",
    EmployeeType: "PartTime",
    CurrentStatus: false,
  },
  
  // ========== DATE OF JOINING CASES ==========
  
  // 24. Recently joined (today)
  {
    FirstName: "Brand",
    LastName: "New",
    Age: 26,
    DateOfJoining: new Date(),
    Title: "Employee",
    Department: "Engineering",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 25. Joined many years ago
  {
    FirstName: "Veteran",
    LastName: "Worker",
    Age: 60,
    DateOfJoining: yearsAgo(35),
    Title: "Director",
    Department: "IT",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 26. Joined last year
  {
    FirstName: "Recent",
    LastName: "Hire",
    Age: 29,
    DateOfJoining: yearsAgo(1),
    Title: "Employee",
    Department: "Marketing",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // ========== COMBINATION CASES ==========
  
  // 27. Part-time contractor about to retire
  {
    FirstName: "Retiring",
    LastName: "Contractor",
    Age: 64,
    DateOfJoining: yearsAgo(30),
    Title: "Employee",
    Department: "IT",
    EmployeeType: "Contract",
    CurrentStatus: true,
  },
  
  // 28. Inactive seasonal worker
  {
    FirstName: "Former",
    LastName: "Seasonal",
    Age: 28,
    DateOfJoining: yearsAgo(2),
    Title: "Employee",
    Department: "Marketing",
    EmployeeType: "Seasonal",
    CurrentStatus: false,
  },
  
  // 29. VP in Engineering about to retire
  {
    FirstName: "Engineering",
    LastName: "VP",
    Age: 64,
    DateOfJoining: yearsAgo(38),
    Title: "VP",
    Department: "Engineering",
    EmployeeType: "FullTime",
    CurrentStatus: true,
  },
  
  // 30. Young part-time Marketing employee
  {
    FirstName: "Young",
    LastName: "Marketer",
    Age: 21,
    DateOfJoining: monthsAgo(2),
    Title: "Employee",
    Department: "Marketing",
    EmployeeType: "PartTime",
    CurrentStatus: true,
  },
];

// Generate additional random employees for realistic data
function generateRandomEmployees(count) {
  const employees = [];
  for (let i = 0; i < count; i++) {
    const age = Math.floor(Math.random() * 51) + 20; // 20-70
    const yearsWorked = Math.min(age - 20, Math.floor(Math.random() * 30));
    
    employees.push({
      FirstName: randomFrom(firstNames),
      LastName: randomFrom(lastNames),
      Age: age,
      DateOfJoining: yearsAgo(yearsWorked),
      Title: randomFrom(titles),
      Department: randomFrom(departments),
      EmployeeType: randomFrom(employeeTypes),
      CurrentStatus: Math.random() > 0.15, // 85% active
    });
  }
  return employees;
}

async function seed() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Clear existing data
    console.log("Clearing existing staff data...");
    await Staff.deleteMany({});
    console.log("Cleared existing data");

    // Add predefined test cases
    console.log("Inserting predefined test cases...");
    await Staff.insertMany(seedData);
    console.log(`Inserted ${seedData.length} predefined test cases`);

    // Add random employees
    const randomCount = 20;
    console.log(`Generating ${randomCount} random employees...`);
    const randomEmployees = generateRandomEmployees(randomCount);
    await Staff.insertMany(randomEmployees);
    console.log(`Inserted ${randomCount} random employees`);

    // Summary
    const total = await Staff.countDocuments();
    const active = await Staff.countDocuments({ CurrentStatus: true });
    const inactive = await Staff.countDocuments({ CurrentStatus: false });
    const byType = await Staff.aggregate([
      { $group: { _id: "$EmployeeType", count: { $sum: 1 } } }
    ]);
    const byDept = await Staff.aggregate([
      { $group: { _id: "$Department", count: { $sum: 1 } } }
    ]);
    const byTitle = await Staff.aggregate([
      { $group: { _id: "$Title", count: { $sum: 1 } } }
    ]);

    console.log("\n========== SEED SUMMARY ==========");
    console.log(`Total employees: ${total}`);
    console.log(`Active: ${active} | Inactive: ${inactive}`);
    console.log("\nBy Employee Type:");
    byType.forEach(t => console.log(`  ${t._id}: ${t.count}`));
    console.log("\nBy Department:");
    byDept.forEach(d => console.log(`  ${d._id}: ${d.count}`));
    console.log("\nBy Title:");
    byTitle.forEach(t => console.log(`  ${t._id}: ${t.count}`));
    console.log("===================================\n");

    console.log("Seed completed successfully!");
  } catch (error) {
    console.error("Seed error:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

seed();
