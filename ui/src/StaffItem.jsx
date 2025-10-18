import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const StaffItem = ({ employee, onRowClick, onDelete }) => {
  const formattedDate = new Date(employee.DateOfJoining).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handleDelete = (e) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(employee._id);
    }
  };

  return (
    <tr onClick={() => onRowClick(employee._id)} style={{ cursor: 'pointer' }}>
      <td>{employee.FirstName}</td>
      <td>{employee.LastName}</td>
      <td>{employee.Age}</td>
      <td>{formattedDate}</td>
      <td>{employee.Title}</td>
      <td>{employee.Department}</td>
      <td>{employee.EmployeeType}</td>
      <td>{employee.CurrentStatus ? 'Active' : 'Inactive'}</td>
      <td>
        <Link to={`/employees/${employee._id}`} className="text-success text-decoration-none">
          Details
        </Link>
      </td>
      <td>
        <Button variant="danger" size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default StaffItem;