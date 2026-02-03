import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsPeople, BsPersonCheck, BsCalendarEvent, BsBriefcase } from "react-icons/bs";
import StaffGrid from "./StaffGrid.jsx";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    retiring: 0,
    departments: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    setLoading(true);
    const query = `
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
    `;
    try {
      const response = await fetch("/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const result = await response.json();
      if (result.errors) throw new Error(result.errors[0].message);
      const data = result.data.staffList || [];
      setEmployees(data);

      const active = data.filter(
        (e) => e.CurrentStatus === true || e.CurrentStatus === "Active"
      ).length;
      const departments = [...new Set(data.map((e) => e.Department))].length;
      const retiring = data.filter((e) => e.Age >= 64).length;

      setStats({
        total: data.length,
        active,
        retiring,
        departments,
      });
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

  const statCards = [
    {
      label: "Total Employees",
      value: stats.total,
      icon: <BsPeople />,
      color: "primary",
    },
    {
      label: "Active Employees",
      value: stats.active,
      icon: <BsPersonCheck />,
      color: "success",
    },
    {
      label: "Retiring Soon",
      value: stats.retiring,
      icon: <BsCalendarEvent />,
      color: "warning",
    },
    {
      label: "Departments",
      value: stats.departments,
      icon: <BsBriefcase />,
      color: "info",
    },
  ];

  return (
    <div>
      <div className="page-header">
        <h1>Dashboard</h1>
        <p className="subtitle">Overview of your employee management system</p>
      </div>

      <div className="stats-grid">
        {statCards.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className={`icon-wrapper ${stat.color}`}>{stat.icon}</div>
            <div className="content">
              <h3>{stat.label}</h3>
              <div className="value">{loading ? "-" : stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {deleteError && (
        <div className="alert alert-danger">
          <span>{deleteError}</span>
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <StaffGrid
        employees={employees}
        loading={loading}
        error={null}
        onRowClick={handleRowClick}
        onDelete={handleDelete}
        title="Recent Employees"
      />
    </div>
  );
};

export default Home;
