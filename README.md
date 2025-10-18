# Nexus EMS - Basic Employee Management System (EMS)

A full-stack web application for managing employee records, tracking retirement timelines, and maintaining organizational staff information. Built with React, GraphQL, Express, and MongoDB.

## Features

- **Employee Management**: Create, read, update, and delete employee records with comprehensive validation
- **Retirement Tracking**: Automatically calculate retirement information for employees based on joining date and age, including exact retirement date and countdown
- **Upcoming Retirements**: View employees retiring within the next 6 months for HR planning
- **Employee Filtering**: Filter employees by employment type (Full-Time, Part-Time, Contract, Seasonal)
- **Status Management**: Track employee status (Active/Inactive) with deletion restrictions for active employees
- **Responsive UI**: Mobile-friendly interface built with React Bootstrap and React Icons
- **GraphQL API**: Modern API with efficient querying and real-time data management
- **Form Validation**: Client-side validation with real-time error feedback during form input
- **Dynamic Navigation**: Icon-based sidebar navigation with breadcrumb tracking

## Tech Stack

### Backend

- **Node.js & Express.js** - Server framework
- **Apollo Server 3** - GraphQL server
- **MongoDB** - NoSQL database with Mongoose ODM
- **GraphQL Scalars** - Custom DateTime type for proper date handling
- **CORS** - Cross-origin resource sharing

### Frontend

- **React 18.2** - UI library
- **React Router 6** - Client-side routing
- **React Bootstrap 2** - UI component library
- **React Icons 5** - Icon library (Bootstrap icons)
- **Webpack 5** - Module bundler with Babel transpilation
- **CSS Loader & Style Loader** - CSS management

## Installation & Setup

### Prerequisites

- Node.js v14 or higher
- MongoDB instance (local or MongoDB Atlas connection string)
- npm or yarn package manager

### Step 1: Clone Repository Or Download File

```bash
git clone <repository-url>
cd ems
```

### Step 2: Install Dependencies

```bash
# Install frontend dependencies
cd ui
npm install

# Install backend dependencies
cd api
npm install
cd ..
```

### Step 3: Build Frontend Assets

```bash
npm run build
```

This runs Webpack to transpile React/JSX and bundle assets into `public/`.

### Step 4: Start Development Servers

**Option A: Sequential (one terminal)**

```bash
# Terminal 1: Start backend
cd server && npm start

# Terminal 2: Start frontend
cd ui && npm start
```

**Option B: Concurrent (with concurrently package)**

```bash
npm run dev:all
```

The application will be accessible at `http://localhost:3000` with the GraphQL endpoint at `http://localhost:4000/graphql`.

## Frontend Components

### App.jsx

Main application component handling routing and overall layout. Features:

- React Router setup with protected routes
- Dynamic breadcrumb navigation
- Two-column layout with sticky sidebar
- Responsive Bootstrap grid system

### EmployeeList.jsx

Employee listing page with:

- Query all employees via GraphQL
- Filter by employee type (Full-Time, Part-Time, Contract, Seasonal)
- Click row to view employee details
- Delete functionality with status validation
- Responsive grid display via StaffGrid component

### EmployeeCreate.jsx

Employee creation form with comprehensive validation:

- **First/Last Name**: Required, trimmed whitespace
- **Age**: Required, must be between 20-70
- **Join Date**: Required, cannot be in the future
- **Title**: Required enum (Employee, Manager, Director, VP)
- **Department**: Required enum (IT, Marketing, HR, Engineering)
- **Employee Type**: Required enum (FullTime, PartTime, Contract, Seasonal)
- Real-time validation on blur, full validation on submit
- Loading state with spinner feedback
- Success message with redirect to employee list

### EmployeeDetails.jsx

Individual employee view displaying:

- Basic information (name, age, title, department, status)
- Comprehensive retirement information section
- Retirement date calculation
- Time until retirement formatted (years, months, days)
- Retirement status indicator
- Edit button linking to update form
- Responsive styling with mobile optimization

### EmployeeUpdate.jsx

Employee update form allowing modification of:

- **Title**: Career level (Employee, Manager, Director, VP)
- **Department**: Current department assignment
- **Status**: Active/Inactive toggle
- Validates that employee is not active before deletion (enforced in list)
- Loads current values on mount
- Confirmation message on successful update

### UpcomingRetirement.jsx

HR planning view showing:

- Employees retiring within next 6 months
- Filters by employee type
- Displays retirement countdown
- Integration with EmployeeGrid for consistent display
- Empty state messaging when no upcoming retirements

### Sidebar.jsx

Navigation component with:

- Icon-based navigation using React Icons
- Links to all major sections (Home, Employees, Create, Retirement, About)
- Sticky positioning for scroll accessibility
- Active link highlighting
- Responsive collapse on mobile

## GraphQL API Documentation

### Queries

**Get All Staff**

```graphql
query {
  staffList(filter: "All") {
    _id
    FirstName
    LastName
    Age
    DateOfJoining
    Title
    Department
    EmployeeType
    CurrentStatus
  }
}
```

**Get Staff By ID with Retirement Info**

```graphql
query {
  staffById(id: "employee-mongodb-id") {
    _id
    FirstName
    LastName
    Age
    DateOfJoining
    Title
    Department
    EmployeeType
    CurrentStatus
    retirementInfo {
      retirementDate
      yearsUntilRetirement
      monthsUntilRetirement
      daysUntilRetirement
      isRetired
      totalDaysUntilRetirement
    }
  }
}
```

**Get Upcoming Retirements (Next 6 Months)**

```graphql
query {
  upcomingRetirementList(filter: "All") {
    _id
    FirstName
    LastName
    retirementInfo {
      retirementDate
      yearsUntilRetirement
      monthsUntilRetirement
      daysUntilRetirement
    }
  }
}
```

Filter parameter accepts: "All", "FullTime", "PartTime", "Contract", "Seasonal"

### Mutations

**Create Staff**

```graphql
mutation CreateStaff(
  $FirstName: String!
  $LastName: String!
  $Age: Int!
  $DateOfJoining: DateTime!
  $Title: String!
  $Department: String!
  $EmployeeType: String!
) {
  createStaff(
    FirstName: $FirstName
    LastName: $LastName
    Age: $Age
    DateOfJoining: $DateOfJoining
    Title: $Title
    Department: $Department
    EmployeeType: $EmployeeType
  ) {
    _id
    FirstName
    LastName
  }
}
```

**Update Staff**

```graphql
mutation UpdateStaff(
  $id: ID!
  $Title: String
  $Department: String
  $CurrentStatus: Boolean
) {
  updateStaff(
    id: $id
    Title: $Title
    Department: $Department
    CurrentStatus: $CurrentStatus
  ) {
    _id
    Title
    Department
    CurrentStatus
  }
}
```

**Delete Staff**

```graphql
mutation DeleteStaff($id: ID!) {
  deleteStaff(id: $id)
}
```

Returns boolean. Throws error if employee status is Active.

## Database Schema

### Employee (Staff) Collection

| Field         | Type     | Constraints       | Description                            |
| ------------- | -------- | ----------------- | -------------------------------------- |
| \_id          | ObjectId | Auto-generated    | MongoDB document ID                    |
| FirstName     | String   | Required, trimmed | Employee first name                    |
| LastName      | String   | Required, trimmed | Employee last name                     |
| Age           | Number   | Required, 20-70   | Employee current age                   |
| DateOfJoining | Date     | Required          | Employee hire date                     |
| Title         | Enum     | Required          | Employee, Manager, Director, VP        |
| Department    | Enum     | Required          | IT, Marketing, HR, Engineering         |
| EmployeeType  | Enum     | Required          | FullTime, PartTime, Contract, Seasonal |
| CurrentStatus | Boolean  | Default: true     | Active employment status               |
| createdAt     | Date     | Auto-generated    | Document creation timestamp            |
| updatedAt     | Date     | Auto-generated    | Document last modified timestamp       |

## Retirement Calculation Logic

The system calculates retirement based on:

1. **Retirement Age**: Fixed at 65 years old
2. **Age at Joining**: Derived from current age and years since joining
3. **Years to Work**: 65 minus age at joining
4. **Retirement Date**: Joining date plus years to work

The calculation provides:

- Exact retirement date (year, month, day)
- Years, months, and days until retirement
- Total days until retirement (for reference)
- Retirement status (already retired or not)

Employees retiring within 6 months appear in the "Upcoming Retirement" list.

## Development Scripts

```bash
# Build frontend assets with Webpack
npm run build

# Start backend server with nodemon (auto-reload)
npm start

# Lint code with ESLint
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Concurrent server startup (if configured)
npm run dev:all
```

## Build & Deployment

## Error Handling

The application handles:

- **Validation Errors**: Age constraints (20-70), required fields, date validation
- **Deletion Restrictions**: Cannot delete active employees
- **MongoDB Connection Failures**: 5-second timeout, process exit on failure
- **GraphQL Errors**: Captured and displayed in UI alerts
- **Network Errors**: User-friendly error messages
- **Not Found**: 404 page for invalid routes

## Troubleshooting

**MongoDB Connection Error**

- Verify connection string in `env.env` is correct
- Check MongoDB Atlas IP whitelist includes your machine
- Ensure network access credentials are valid
- Check `serverSelectionTimeoutMS` setting (currently 5 seconds)

**Webpack Build Issues**

- Delete `node_modules/` and `public/` directories
- Run `npm install` and `npm run build` again
- Ensure all required loaders are installed

**CORS Errors**

- Verify `ENABLE_CORS=true` in backend `env.env`
- Check that frontend makes requests to `http://localhost:4000/graphql`
- Confirm `API_PROXY_TARGET` matches backend URL

**Form Validation Not Working**

- Ensure all required fields are filled before submission
- Check browser console for validation error details
- Verify date format matches expected format (YYYY-MM-DD)

## Security Considerations

- **Age Constraint**: Database schema enforces 20-70 age range
- **Enum Validation**: GraphQL enums restrict Title, Department, EmployeeType values
- **Status Protection**: Active employees cannot be deleted
- **CORS**: Configured to accept requests from trusted origins
- **Input Sanitization**: First/Last names trimmed to remove whitespace

## Future Enhancements

Potential features for future versions:

- User authentication and authorization
- Employee search functionality
- Bulk employee import/export
- Advanced filtering and sorting
- Employee performance reviews
- Attendance tracking
- Leave management
- Email notifications for upcoming retirements
- Dashboard with analytics
- Dark mode UI option
