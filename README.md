# Employee Management System (EMS)

A full-stack web application for managing employee records, tracking retirement timelines, and maintaining organizational staff information. Built with a monorepo structure containing separate API and UI directories using React, GraphQL, Express, and MongoDB.

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
- **Reusable Components**: Modular component library for buttons, inputs, and common UI elements

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
- Git

### Step 1: Clone Repository

```bash
git clone <repository-url>
cd fullstackgroup
```

### Step 2: Backend Setup

Navigate to the API directory and configure environment variables:

```bash
cd api
```

Create or update `env.env` file:

```
DB_URL=mongodb+srv://your-username:your-password@cluster.mongodb.net/ems?retryWrites=true&w=majority
API_SERVER_PORT=4000
ENABLE_CORS=true
```

Install backend dependencies:

```bash
npm install
```

### Step 3: Frontend Setup

Navigate to the UI directory and configure environment variables:

```bash
cd ../ui
```

Create or update `env.env` file:

```
API_PROXY_TARGET=http://localhost:4000/graphql
UI_SERVER_PORT=3000
```

Install frontend dependencies:

```bash
npm install
```

### Step 4: Build Frontend Assets

```bash
npm run build
```

This runs Webpack to transpile React/JSX and bundle assets into `public/`. Output includes:

- `app.bundle.js` - Application code
- `vendors.bundle.js` - Third-party libraries
- Source maps for debugging

### Step 5: Start Development Servers

**Terminal 1 - Start Backend API:**

```bash
cd api
npm start
```

Expected output:

```
Connected to MongoDB server
EMS Server running at http://localhost:4000
GraphQL endpoint at http://localhost:4000/graphql
```

**Terminal 2 - Start Frontend UI:**

```bash
cd ui
npm start
```

Expected output:

```
EMS UI Server running at http://localhost:3000
```

Access the application at `http://localhost:3000`

## GraphQL API Documentation

### Queries

**Get All Staff with Filtering**

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

Accepted filter values: "All", "FullTime", "PartTime", "Contract", "Seasonal"

**Get Staff By ID with Retirement Info**

```graphql
query {
  staffById(id: "mongodb-object-id") {
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
    Age
    DateOfJoining
    Title
    Department
    EmployeeType
    CurrentStatus
    retirementInfo {
      retirementDate
      daysUntilRetirement
      monthsUntilRetirement
      yearsUntilRetirement
      isRetired
    }
  }
}
```

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

Returns boolean. Throws error if employee CurrentStatus is true (Active).

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

The system calculates employee retirement based on:

1. **Retirement Age**: Fixed at 65 years old
2. **Age at Joining**: Calculated from current age and years employed
3. **Years to Work**: 65 minus age at joining
4. **Retirement Date**: Joining date plus years to work

**Calculation Provides**:

- Exact retirement date (year, month, day)
- Years, months, and days until retirement
- Total days until retirement (for reference)
- Retirement status (already retired or not)

**Upcoming Retirements**: Employees retiring within 6 months appear in the "Upcoming Retirement" list for HR planning purposes.

## Development Scripts

### Backend (API) Scripts

```bash
cd api

# Start backend server with nodemon (auto-reload on file changes)
npm start

# Alternative: Start with nodemon watching server directory
npm run dev
```

### Frontend (UI) Scripts

```bash
cd ui

# Build frontend assets with Webpack
npm run build

# Start frontend UI server
npm start

# Run ESLint code quality checks
npm run lint

# Fix ESLint issues automatically
npm run lint:fix
```

## Webpack Configuration

The frontend uses Webpack 5 for bundling React components and assets.

**Configuration Details** (`webpack.config.js`):

- **Mode**: Development (enables source maps for debugging)
- **Entry Point**: `src/index.js`
- **Output**: `public/[name].bundle.js`
- **Loaders**:
  - Babel: Transpiles JSX and ES6+ syntax
  - CSS/Style: Processes and injects CSS
- **Code Splitting**:
  - Separates vendors and application code
  - Creates `vendors.bundle.js` and `app.bundle.js`
- **Source Maps**: Enabled for debugging in browser DevTools
- **Extensions Resolved**: `.js`, `.jsx`

**Build Output**:

```
public/
├── app.bundle.js
├── app.bundle.js.map
├── vendors.bundle.js
├── vendors.bundle.js.map
└── index.html
```

## Environment Variables

### Backend (`api/env.env`)

```
DB_URL=mongodb+srv://username:password@cluster.mongodb.net/ems?retryWrites=true&w=majority
API_SERVER_PORT=4000
ENABLE_CORS=true
```

**Variables Explained**:

- `DB_URL`: MongoDB connection string with credentials
- `API_SERVER_PORT`: Port for GraphQL API server
- `ENABLE_CORS`: Enable/disable CORS middleware

### Frontend (`ui/env.env`)

```
API_PROXY_TARGET=http://localhost:4000/graphql
UI_SERVER_PORT=3000
```

**Variables Explained**:

- `API_PROXY_TARGET`: Backend GraphQL endpoint URL
- `UI_SERVER_PORT`: Port for frontend UI server

## Error Handling

The application handles various error scenarios:

**Validation Errors**:

- Age constraints enforced (20-70 years)
- Required field validation
- Date validation (cannot be in future)
- Field-level error messages on blur

**Deletion Restrictions**:

- Cannot delete employees with Active status (CurrentStatus: true)
- Error message: "CAN'T DELETE EMPLOYEE — STATUS ACTIVE"
- User must set status to Inactive first

**MongoDB Connection**:

- 5-second timeout (`serverSelectionTimeoutMS`)
- Process exits on connection failure
- Connection errors logged to console

**GraphQL Errors**:

- Server errors captured and displayed in UI alerts
- Validation errors shown inline with forms
- Network errors displayed as user-friendly messages

**Navigation Errors**:

- 404 page for invalid routes
- Not Found page for non-existent employee IDs
- Links to return to home or employee list

## Troubleshooting

**MongoDB Connection Error**

```
Error: connect ECONNREFUSED
```

- Verify MongoDB is running (local) or Atlas connection is correct
- Check connection string in `api/env.env`
- Verify MongoDB Atlas IP whitelist includes your machine
- Confirm database credentials are valid
- Test connection: `mongo "your-connection-string"`

**Webpack Build Fails**

```
Error: Cannot find module 'babel-loader'
```

- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again
- Ensure all loaders are installed: `npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react css-loader style-loader`
- Run `npm run build`

**CORS Errors in Browser Console**

```
Access to XMLHttpRequest blocked by CORS policy
```

- Verify `ENABLE_CORS=true` in `api/env.env`
- Check that frontend makes requests to correct backend URL
- Confirm backend is running on port 4000
- Verify `API_PROXY_TARGET` in `ui/env.env` matches backend

**Form Validation Not Working**

- Ensure all required fields are filled before submission
- Check browser console for JavaScript errors
- Verify date format is YYYY-MM-DD
- Age must be numeric between 20-70
- Clear browser cache and rebuild: `npm run build`

**Port Already in Use**

```
Error: listen EADDRINUSE: address already in use :::4000
```

- Find process using port: `lsof -i :4000` (Mac/Linux) or `netstat -ano | findstr :4000` (Windows)
- Kill process or change port in `env.env`
- Alternatively: `kill -9 <PID>` (Mac/Linux)

**Build Takes Too Long**

- First build with source maps is slower
- Subsequent builds use cache
- Run in production mode for faster build: `NODE_ENV=production npm run build`

## Code Quality

### ESLint Configuration

The project uses ESLint to maintain code quality. Configuration in `.eslintrc.json`:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  }
}
```

Ignored files (`.eslintignore`):

- `node_modules/`
- `public/`
- `*.bundle.js`
- Build artifacts

## Future Enhancements

Potential features for future versions:

- User authentication and authorization system
- Employee search with advanced filtering
- Bulk employee import/export (CSV/Excel)
- Advanced sorting and pagination
- Employee performance reviews module
- Attendance tracking system
- Leave management system
- Email notifications for upcoming retirements
- Analytics dashboard with charts
- Dark mode UI option
- Mobile native app (React Native)
- Activity audit logs
- Role-based access control (RBAC)
