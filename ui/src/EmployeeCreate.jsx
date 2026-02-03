import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BsArrowLeft, BsPersonPlus } from "react-icons/bs";

const EmployeeCreate = ({ refresh }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    FirstName: "",
    LastName: "",
    Age: "",
    DateOfJoining: "",
    Title: "",
    Department: "",
    EmployeeType: "",
    error: "",
    success: "",
    loading: false,
  });

  const [touched, setTouched] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const isEmpty = (s) => !s || !String(s).trim();
  const clampInt = (v) => {
    const n = parseInt(v, 10);
    return Number.isFinite(n) ? n : NaN;
  };
  const isValidDate = (v) => {
    const d = new Date(v);
    return !Number.isNaN(d.getTime());
  };

  const validateAll = (vals) => {
    const errs = {};
    const ageNum = clampInt(vals.Age);

    if (isEmpty(vals.FirstName)) errs.FirstName = "First name is required";
    if (isEmpty(vals.LastName)) errs.LastName = "Last name is required";

    if (Number.isNaN(ageNum)) errs.Age = "Age is required";
    else if (ageNum < 20 || ageNum > 70) errs.Age = "Age must be between 20 and 70";

    if (isEmpty(vals.DateOfJoining)) {
      errs.DateOfJoining = "Join date is required";
    } else if (!isValidDate(vals.DateOfJoining)) {
      errs.DateOfJoining = "Enter a valid date";
    } else {
      const d = new Date(vals.DateOfJoining);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (d > today) errs.DateOfJoining = "Join date cannot be in the future";
    }

    if (isEmpty(vals.Title)) errs.Title = "Title is required";
    if (isEmpty(vals.Department)) errs.Department = "Department is required";
    if (isEmpty(vals.EmployeeType)) errs.EmployeeType = "Employee type is required";

    return errs;
  };

  const updateField = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const nextVals = { ...state, [name]: value };
      const errs = validateAll(nextVals);
      setFieldErrors(errs);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validateAll(state);
    setFieldErrors(errs);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (state.loading) return;

    const errs = validateAll(state);
    setFieldErrors(errs);
    setTouched({
      FirstName: true,
      LastName: true,
      Age: true,
      DateOfJoining: true,
      Title: true,
      Department: true,
      EmployeeType: true,
    });

    if (Object.keys(errs).length > 0) {
      setState((prev) => ({
        ...prev,
        error: "Please fill in all required fields correctly.",
        success: "",
      }));
      const firstKey = Object.keys(errs)[0];
      const el = document.querySelector(`[name="${firstKey}"]`);
      if (el) el.focus();
      return;
    }

    const { FirstName, LastName, Age, DateOfJoining, Title, Department, EmployeeType } =
      state;
    const ageNum = clampInt(Age);

    setState((prev) => ({ ...prev, loading: true, error: "", success: "" }));

    const isoDate = new Date(DateOfJoining).toISOString();
    const query = `
      mutation AddEmployee($FirstName: String!, $LastName: String!, $Age: Int!, $DateOfJoining: DateTime!, $Title: String!, $Department: String!, $EmployeeType: String!) {
        createStaff(FirstName: $FirstName, LastName: $LastName, Age: $Age, DateOfJoining: $DateOfJoining, Title: $Title, Department: $Department, EmployeeType: $EmployeeType) {
          _id
        }
      }
    `;

    try {
      const response = await fetch("/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          variables: {
            FirstName: FirstName.trim(),
            LastName: LastName.trim(),
            Age: ageNum,
            DateOfJoining: isoDate,
            Title,
            Department,
            EmployeeType,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      if (result.errors) throw new Error(result.errors[0].message || "Server error");

      setState({
        FirstName: "",
        LastName: "",
        Age: "",
        DateOfJoining: "",
        Title: "",
        Department: "",
        EmployeeType: "",
        error: "",
        success: "Employee added successfully!",
        loading: false,
      });
      setTouched({});
      setFieldErrors({});

      if (refresh) refresh();
      setTimeout(() => {
        setState((prev) => ({ ...prev, success: "" }));
        navigate("/employees");
      }, 1500);
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: err.message || "Failed to create employee.",
        loading: false,
      }));
    }
  };

  const { error, success, FirstName, LastName, Age, DateOfJoining, Title, Department, EmployeeType, loading } = state;

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
        <h1>Add Employee</h1>
        <p className="subtitle">Create a new employee record</p>
      </div>

      <div className="form-card">
        <div className="header">
          <h2>Employee Information</h2>
        </div>

        <div className="body">
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form onSubmit={submitForm} noValidate>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="FirstName"
                  className={`form-input ${touched.FirstName && fieldErrors.FirstName ? "is-invalid" : ""}`}
                  value={FirstName}
                  onChange={updateField}
                  onBlur={handleBlur}
                />
                {touched.FirstName && fieldErrors.FirstName && (
                  <div className="form-error">{fieldErrors.FirstName}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="LastName"
                  className={`form-input ${touched.LastName && fieldErrors.LastName ? "is-invalid" : ""}`}
                  value={LastName}
                  onChange={updateField}
                  onBlur={handleBlur}
                />
                {touched.LastName && fieldErrors.LastName && (
                  <div className="form-error">{fieldErrors.LastName}</div>
                )}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="form-group">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  name="Age"
                  className={`form-input ${touched.Age && fieldErrors.Age ? "is-invalid" : ""}`}
                  value={Age}
                  onChange={updateField}
                  onBlur={handleBlur}
                  min="20"
                  max="70"
                />
                {touched.Age && fieldErrors.Age && (
                  <div className="form-error">{fieldErrors.Age}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Join Date</label>
                <input
                  type="date"
                  name="DateOfJoining"
                  className={`form-input ${touched.DateOfJoining && fieldErrors.DateOfJoining ? "is-invalid" : ""}`}
                  value={DateOfJoining}
                  onChange={updateField}
                  onBlur={handleBlur}
                />
                {touched.DateOfJoining && fieldErrors.DateOfJoining && (
                  <div className="form-error">{fieldErrors.DateOfJoining}</div>
                )}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="form-group">
                <label className="form-label">Title</label>
                <select
                  name="Title"
                  className={`form-select ${touched.Title && fieldErrors.Title ? "is-invalid" : ""}`}
                  value={Title}
                  onChange={updateField}
                  onBlur={handleBlur}
                >
                  <option value="">Select title</option>
                  <option value="Employee">Employee</option>
                  <option value="Manager">Manager</option>
                  <option value="Director">Director</option>
                  <option value="VP">VP</option>
                </select>
                {touched.Title && fieldErrors.Title && (
                  <div className="form-error">{fieldErrors.Title}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Department</label>
                <select
                  name="Department"
                  className={`form-select ${touched.Department && fieldErrors.Department ? "is-invalid" : ""}`}
                  value={Department}
                  onChange={updateField}
                  onBlur={handleBlur}
                >
                  <option value="">Select department</option>
                  <option value="IT">IT</option>
                  <option value="Marketing">Marketing</option>
                  <option value="HR">HR</option>
                  <option value="Engineering">Engineering</option>
                </select>
                {touched.Department && fieldErrors.Department && (
                  <div className="form-error">{fieldErrors.Department}</div>
                )}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Employee Type</label>
              <select
                name="EmployeeType"
                className={`form-select ${touched.EmployeeType && fieldErrors.EmployeeType ? "is-invalid" : ""}`}
                value={EmployeeType}
                onChange={updateField}
                onBlur={handleBlur}
              >
                <option value="">Select type</option>
                <option value="FullTime">Full Time</option>
                <option value="PartTime">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Seasonal">Seasonal</option>
              </select>
              {touched.EmployeeType && fieldErrors.EmployeeType && (
                <div className="form-error">{fieldErrors.EmployeeType}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%" }} disabled={loading}>
              {loading ? (
                <>
                  <div className="spinner" style={{ width: 16, height: 16, borderWidth: 2 }}></div>
                  Saving...
                </>
              ) : (
                <>
                  <BsPersonPlus /> Add Employee
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCreate;
