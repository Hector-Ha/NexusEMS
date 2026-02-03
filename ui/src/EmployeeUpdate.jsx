import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BsArrowLeft, BsCheck } from "react-icons/bs";

const EmployeeUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    Title: "",
    Department: "",
    CurrentStatus: "",
    error: "",
    success: "",
    loading: false,
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      setState((prev) => ({ ...prev, loading: true }));
      const query = `
        query {
          staffById(id: "${id}") {
            _id
            Title
            Department
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
        if (!result.data.staffById) throw new Error("Employee not found");
        const data = result.data.staffById;
        setState({
          Title: data.Title || "",
          Department: data.Department || "",
          CurrentStatus: data.CurrentStatus.toString(),
          error: "",
          success: "",
          loading: false,
        });
      } catch (err) {
        setState((prev) => ({ ...prev, error: err.message, loading: false }));
      }
    };
    fetchEmployee();
  }, [id]);

  const updateField = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setState({ ...state, loading: true, error: "", success: "" });
    const { Title, Department, CurrentStatus } = state;
    if (!Title || !Department || !CurrentStatus) {
      setState({ ...state, error: "All fields are required", loading: false });
      return;
    }
    const mutation = `
      mutation UpdateEmployee($id: ID!, $Title: String, $Department: String, $CurrentStatus: Boolean) {
        updateStaff(id: $id, Title: $Title, Department: $Department, CurrentStatus: $CurrentStatus) {
          _id
        }
      }
    `;
    try {
      const response = await fetch("/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: mutation,
          variables: { id, Title, Department, CurrentStatus: CurrentStatus === "true" },
        }),
      });
      const result = await response.json();
      if (result.errors) throw new Error(result.errors[0].message);
      setState({ ...state, error: "", success: "Employee updated successfully!", loading: false });
      setTimeout(() => navigate(`/employees/${id}`), 1500);
    } catch (err) {
      setState({ ...state, error: err.message, loading: false });
    }
  };

  if (state.loading && !state.Title) {
    return (
      <div className="loading-wrapper">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="page-header">
        <Link
          to={`/employees/${id}`}
          className="btn btn-ghost btn-sm"
          style={{ marginBottom: 16, display: "inline-flex" }}
        >
          <BsArrowLeft /> Back to Details
        </Link>
        <h1>Edit Employee</h1>
        <p className="subtitle">Update employee information</p>
      </div>

      <div className="form-card">
        <div className="header">
          <h2>Edit Information</h2>
        </div>

        <div className="body">
          {state.error && <div className="alert alert-danger">{state.error}</div>}
          {state.success && <div className="alert alert-success">{state.success}</div>}

          <form onSubmit={submitForm}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="form-group">
                <label className="form-label">Title</label>
                <select
                  name="Title"
                  className="form-select"
                  value={state.Title}
                  onChange={updateField}
                  required
                >
                  <option value="">Select title</option>
                  <option value="Employee">Employee</option>
                  <option value="Manager">Manager</option>
                  <option value="Director">Director</option>
                  <option value="VP">VP</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Department</label>
                <select
                  name="Department"
                  className="form-select"
                  value={state.Department}
                  onChange={updateField}
                  required
                >
                  <option value="">Select department</option>
                  <option value="IT">IT</option>
                  <option value="Marketing">Marketing</option>
                  <option value="HR">HR</option>
                  <option value="Engineering">Engineering</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Status</label>
              <select
                name="CurrentStatus"
                className="form-select"
                value={state.CurrentStatus}
                onChange={updateField}
                required
              >
                <option value="">Select status</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%" }}
              disabled={state.loading}
            >
              {state.loading ? (
                <>
                  <div className="spinner" style={{ width: 16, height: 16, borderWidth: 2 }}></div>
                  Saving...
                </>
              ) : (
                <>
                  <BsCheck /> Update Employee
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeUpdate;
