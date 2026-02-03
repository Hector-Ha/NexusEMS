import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BsPencil, BsArrowLeft } from "react-icons/bs";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      setLoading(true);
      const query = `
        query {
          staffById(id: "${id}") {
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
      `;
      try {
        const response = await fetch("/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        });
        const result = await response.json();
        if (result.errors) throw new Error(result.errors[0].message);
        if (!result.data.staffById) throw new Error("Employee not found");
        setEmployee(result.data.staffById);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployee();
  }, [id]);

  const formatRetirementCountdown = (retirementInfo) => {
    if (retirementInfo.isRetired) {
      return <span className="badge badge-danger">Retired</span>;
    }

    const { yearsUntilRetirement, monthsUntilRetirement, daysUntilRetirement } =
      retirementInfo;

    const parts = [];
    if (yearsUntilRetirement > 0)
      parts.push(`${yearsUntilRetirement} year${yearsUntilRetirement !== 1 ? "s" : ""}`);
    if (monthsUntilRetirement > 0)
      parts.push(`${monthsUntilRetirement} month${monthsUntilRetirement !== 1 ? "s" : ""}`);
    if (daysUntilRetirement > 0)
      parts.push(`${daysUntilRetirement} day${daysUntilRetirement !== 1 ? "s" : ""}`);

    if (parts.length === 0)
      return <span className="badge badge-warning">Retiring very soon</span>;

    return parts.join(", ");
  };

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

  if (!employee) {
    return <div className="alert alert-danger">Employee not found</div>;
  }

  return (
    <div>
      <div className="page-header">
        <Link
          to="/employees"
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: 16, display: "inline-flex" }}
        >
          <BsArrowLeft /> Back to Employees
        </Link>
        <h1>Employee Details</h1>
        <p className="subtitle">View and manage employee information</p>
      </div>

      <div className="details-card">
        <div className="header">
          <div className="avatar">
            {employee.FirstName?.[0]}
            {employee.LastName?.[0]}
          </div>
          <div className="name">
            {employee.FirstName} {employee.LastName}
          </div>
          <div className="title">
            {employee.Title} • {employee.Department}
          </div>
        </div>

        <div className="body">
          <div className="info-row">
            <span className="info-label">Age</span>
            <span className="info-value">{employee.Age}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Join Date</span>
            <span className="info-value">
              {new Date(employee.DateOfJoining).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="info-row">
            <span className="info-label">Employee Type</span>
            <span className="info-value">{employee.EmployeeType}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Status</span>
            <span className="info-value">
              <span
                className={`badge ${
                  employee.CurrentStatus ? "badge-success" : "badge-secondary"
                }`}
              >
                {employee.CurrentStatus ? "Active" : "Inactive"}
              </span>
            </span>
          </div>

          {employee.retirementInfo && (
            <div className="retirement-section">
              <h3>Retirement Information</h3>
              <div className="info-row">
                <span className="info-label">Retirement Date</span>
                <span className="info-value">
                  {new Date(employee.retirementInfo.retirementDate).toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  )}
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">Time Remaining</span>
                <span className="info-value">
                  {formatRetirementCountdown(employee.retirementInfo)}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="footer">
          <Link to={`/employees/${id}/update`} className="btn btn-primary" style={{ width: "100%" }}>
            <BsPencil /> Edit Employee
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
