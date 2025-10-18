import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import { Container, Row, Col, Breadcrumb, Navbar } from "react-bootstrap";

import Home from "./Home.jsx";
import EmployeeList from "./EmployeeList.jsx";
import EmployeeCreate from "./EmployeeCreate.jsx";
import EmployeeDetails from "./EmployeeDetails.jsx";
import EmployeeUpdate from "./EmployeeUpdate.jsx";
import About from "./About.jsx";
import UpcomingRetirement from "./UpcomingRetirement.jsx";
import NotFound from "./NotFound.jsx";

// Import the new Sidebar component with icons
import SidebarNav from "./Sidebar.jsx";

// Dynamic Breadcrumb component
const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const labelMap = {
    employees: "Employee List",
    create: "Add Employee",
    update: "Update Employee",
    retirement: "Upcoming Retirement",
    about: "About",
  };

  return (
    <Breadcrumb className="mt-3">
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
        Home
      </Breadcrumb.Item>
      {pathnames.map((value, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;
        return (
          <Breadcrumb.Item
            key={to}
            linkAs={Link}
            linkProps={{ to }}
            active={isLast}
          >
            {labelMap[value] || value.charAt(0).toUpperCase() + value.slice(1)}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

const AppLayout = () => {
  return (
    <>
      {/* Top Navbar - minimal */}
      <Navbar bg="light" variant="light" className="border-bottom shadow-sm">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
            EMS
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Page Layout */}
      <Container fluid className="mt-3">
        <Breadcrumbs />

        <Row>
          {/* Sidebar Navigation with icons */}
          <Col xs={12} md={3} lg={2} className="p-0">
            <SidebarNav />
          </Col>

          {/* Main Content */}
          <Col xs={12} md={9} lg={10}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/employees/create" element={<EmployeeCreate />} />
              <Route path="/employees/:id" element={<EmployeeDetails />} />
              <Route
                path="/employees/:id/update"
                element={<EmployeeUpdate />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/retirement" element={<UpcomingRetirement />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const App = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;
