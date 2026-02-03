import React from "react";
import { BsEye, BsTrash, BsPersonX } from "react-icons/bs";

const isActive = (status) =>
  status === true || status === "Active" || status === 1 || status === "1";

const typeVariant = (type) => {
  switch (type) {
    case "FullTime":
      return "badge-success";
    case "PartTime":
      return "badge-info";
    case "Contract":
      return "badge-warning";
    case "Seasonal":
      return "badge-secondary";
    default:
      return "badge-secondary";
  }
};

const formatDate = (v) => {
  if (!v) return "";
  const d = new Date(v);
  return Number.isNaN(d.getTime())
    ? v
    : d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
};

const StaffGrid = ({
  employees,
  loading,
  error,
  onRowClick,
  onDelete,
  title = "Employees",
  filterControl,
}) => {
  if (loading) {
    return (
      <div className="loading-wrapper">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  if (!employees || employees.length === 0) {
    return (
      <div className="data-table-wrapper">
        <div className="data-table-header">
          <h2>{title}</h2>
          {filterControl}
        </div>
        <div className="empty-state">
          <BsPersonX className="icon" />
          <h3>No employees found</h3>
          <p>Get started by adding your first employee.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="data-table-wrapper">
      <div className="data-table-header">
        <h2>{title}</h2>
        {filterControl}
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Join Date</th>
              <th>Title</th>
              <th>Department</th>
              <th>Type</th>
              <th>Status</th>
              <th style={{ width: 120 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id} onClick={() => onRowClick(emp._id)}>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        flexShrink: 0,
                      }}
                    >
                      {emp.FirstName?.[0]}
                      {emp.LastName?.[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 500, color: "var(--gray-900)" }}>
                        {emp.FirstName} {emp.LastName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{emp.Age}</td>
                <td>{formatDate(emp.DateOfJoining)}</td>
                <td>{emp.Title}</td>
                <td>{emp.Department}</td>
                <td>
                  <span className={`badge ${typeVariant(emp.EmployeeType)}`}>
                    {emp.EmployeeType}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge ${
                      isActive(emp.CurrentStatus) ? "badge-success" : "badge-secondary"
                    }`}
                  >
                    {isActive(emp.CurrentStatus) ? "Active" : "Inactive"}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      className="btn btn-ghost btn-sm btn-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRowClick(emp._id);
                      }}
                      title="View Details"
                    >
                      <BsEye />
                    </button>
                    <button
                      className="btn btn-ghost btn-sm btn-icon"
                      style={{ color: "var(--danger)" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(emp._id, emp.CurrentStatus);
                      }}
                      title="Delete"
                    >
                      <BsTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffGrid;
