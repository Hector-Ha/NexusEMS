import React from "react";
import { Table, Alert, Spinner, Button, Badge } from "react-bootstrap";

const isActive = (status) =>
  status === true || status === "Active" || status === 1 || status === "1";

const typeVariant = (type) => {
  switch (type) {
    case "FullTime":
      return "success";
    case "PartTime":
      return "info";
    case "Contract":
      return "warning";
    case "Seasonal":
      return "secondary";
    default:
      return "secondary";
  }
};

const formatDate = (v) => {
  if (!v) return "";
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? v : d.toDateString();
};

const StaffGrid = ({
  employees,
  loading,
  error,
  onRowClick,
  onDelete,
  filterControl,
}) => {
  if (loading)
    return (
      <div className="text-center">
        <Spinner animation="border" variant="success" />
      </div>
    );

  if (error) return <Alert variant="danger">Error: {error}</Alert>;
  if (!employees || employees.length === 0)
    return <Alert variant="info">No employees found.</Alert>;

  return (
    <div>
      <div className="d-flex justify-content-end mb-2">
        {filterControl ?? null}
      </div>

      <Table bordered striped hover responsive className="align-middle mb-0">
        <thead
          style={{ backgroundColor: "#2C3E50", color: "#fff", height: "50px" }}
        >
          <tr>
            <th className="fw-bold">First Name</th>
            <th className="fw-bold">Last Name</th>
            <th className="fw-bold">Age</th>
            <th className="fw-bold">Date Of Joining</th>
            <th className="fw-bold">Title</th>
            <th className="fw-bold">Department</th>
            <th className="fw-bold">Employee Type</th>
            <th className="fw-bold">Status</th>
            <th className="fw-bold" style={{ width: 80 }}>
              Details
            </th>
            <th className="fw-bold" style={{ width: 80 }}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr
              key={emp._id}
              onClick={() => onRowClick(emp._id)}
              style={{ cursor: "pointer" }}
            >
              <td style={{ fontWeight: "normal" }}>{emp.FirstName}</td>
              <td>{emp.LastName}</td>
              <td>{emp.Age}</td>
              <td>{formatDate(emp.DateOfJoining)}</td>
              <td>{emp.Title}</td>
              <td>{emp.Department}</td>
              <td>
                <Badge bg={typeVariant(emp.EmployeeType)} pill>
                  {emp.EmployeeType}
                </Badge>
              </td>
              <td>
                <Badge
                  bg={isActive(emp.CurrentStatus) ? "success" : "secondary"}
                  pill
                >
                  {isActive(emp.CurrentStatus) ? "Active" : "Inactive"}
                </Badge>
              </td>
              <td>
                <Button
                  variant="link"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRowClick(emp._id);
                  }}
                >
                  Details
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(emp._id, emp.CurrentStatus);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StaffGrid;
