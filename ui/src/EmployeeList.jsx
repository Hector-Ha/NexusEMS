import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StaffGrid from "./StaffGrid.jsx";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, [filter]);

  const fetchEmployees = async () => {
    setLoading(true);
    const query = `
      query {
        staffList(filter: "${filter}") {
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
    `;
    try {
      const response = await fetch("/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const result = await response.json();
      if (result.errors) throw new Error(result.errors[0].message);
      setEmployees(result.data.staffList || []);
      setError(null);
    } catch (err) {
      setError(err.message || "Failed to load employees.");
    } finally {
      setLoading(false);
    }
  };

  const isActive = (status) =>
    status === true || status === "Active" || status === 1 || status === "1";

  const handleDelete = async (id, status) => {
    if (isActive(status)) {
      setDeleteError("Cannot delete an active employee. Please deactivate first.");
      setTimeout(() => setDeleteError(""), 5000);
      return;
    }

    setLoading(true);
    const mutation = `
      mutation {
        deleteStaff(id: "${id}")
      }
    `;
    try {
      const response = await fetch("/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: mutation }),
      });
      const result = await response.json();
      if (result.errors) throw new Error(result.errors[0].message);

      if (result.data.deleteStaff) {
        await fetchEmployees();
        setSuccess("Employee deleted successfully");
        setTimeout(() => setSuccess(""), 3000);
      } else {
        throw new Error("Delete operation failed");
      }
    } catch (err) {
      setError(err.message || "Delete failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleRowClick = (id) => navigate(`/employees/${id}`);

  const filterControl = (
    <select
      className="filter-select"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="All">All Types</option>
      <option value="FullTime">Full Time</option>
      <option value="PartTime">Part Time</option>
      <option value="Contract">Contract</option>
      <option value="Seasonal">Seasonal</option>
    </select>
  );

  return (
    <div>
      <div className="page-header">
        <h1>Employees</h1>
        <p className="subtitle">Manage your organization&apos;s workforce</p>
      </div>

      {deleteError && <div className="alert alert-danger">{deleteError}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <StaffGrid
        employees={employees}
        loading={loading}
        error={null}
        onRowClick={handleRowClick}
        onDelete={handleDelete}
        title="Employee Directory"
        filterControl={filterControl}
      />
    </div>
  );
};

export default EmployeeList;
