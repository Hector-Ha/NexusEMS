import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsHouse, BsPeople, BsPlusCircle, BsCalendarEvent, BsInfoCircle } from 'react-icons/bs';

const SidebarNav = () => {
  const links = [
    { to: '/', label: 'Home', icon: <BsHouse /> },
    { to: '/employees', label: 'Employee List', icon: <BsPeople /> },
    { to: '/employees/create', label: 'Add Employee', icon: <BsPlusCircle /> },
    { to: '/retirement', label: 'Upcoming Retirement', icon: <BsCalendarEvent /> },
    { to: '/about', label: 'About', icon: <BsInfoCircle /> },
  ];

  return (
    <div className="bg-light border rounded-3 p-3 sticky-top" style={{ top: '1rem' }}>
      <Nav variant="pills" className="flex-column gap-1">
        {links.map((l) => (
          <Nav.Link
            key={l.to}
            as={NavLink}
            to={l.to}
            end
            className="rounded d-flex align-items-center px-3 py-2"
          >
            <span className="me-2" style={{ fontSize: 18 }}>{l.icon}</span>
            <span>{l.label}</span>
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default SidebarNav;
