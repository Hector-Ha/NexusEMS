import React from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import {
  BsHouseDoor,
  BsPeople,
  BsPersonPlus,
  BsCalendarEvent,
  BsInfoCircle,
} from "react-icons/bs";

import Home from "./Home.jsx";
import EmployeeList from "./EmployeeList.jsx";
import EmployeeCreate from "./EmployeeCreate.jsx";
import EmployeeDetails from "./EmployeeDetails.jsx";
import EmployeeUpdate from "./EmployeeUpdate.jsx";
import About from "./About.jsx";
import UpcomingRetirement from "./UpcomingRetirement.jsx";
import NotFound from "./NotFound.jsx";

const Navbar = () => (
  <nav className="saas-navbar">
    <Link to="/" className="brand">
      <div className="brand-icon">N</div>
      <span>NexusEMS</span>
    </Link>
    <div className="nav-actions"></div>
  </nav>
);

const Sidebar = () => {
  const mainLinks = [
    { to: "/", label: "Dashboard", icon: <BsHouseDoor /> },
    { to: "/employees", label: "Employees", icon: <BsPeople /> },
    { to: "/employees/create", label: "Add Employee", icon: <BsPersonPlus /> },
  ];

  const otherLinks = [
    { to: "/retirement", label: "Retirement", icon: <BsCalendarEvent /> },
    { to: "/about", label: "About", icon: <BsInfoCircle /> },
  ];

  return (
    <aside className="saas-sidebar">
      <div className="nav-section">
        <div className="nav-section-title">Main Menu</div>
        {mainLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="icon">{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </div>
      <div className="nav-section">
        <div className="nav-section-title">Reports</div>
        {otherLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="icon">{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/create" element={<EmployeeCreate />} />
            <Route path="/employees/:id" element={<EmployeeDetails />} />
            <Route path="/employees/:id/update" element={<EmployeeUpdate />} />
            <Route path="/about" element={<About />} />
            <Route path="/retirement" element={<UpcomingRetirement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

const App = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;
