import React, { useState } from 'react';

const EmployeeCreate = (props) => {
  const { refresh } = props;
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
  });

  const updateField = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const { FirstName, LastName, Age, DateOfJoining, Title, Department, EmployeeType } = state;
    const ageNum = parseInt(Age);

    if (!FirstName || !LastName || !DateOfJoining || !Title || !Department || !EmployeeType || isNaN(ageNum)) {
      setState({ ...state, error: "All fields are required" });
      return;
    }
    if (ageNum < 20 || ageNum > 70) {
      setState({ ...state, error: "Age must be between 20 and 70" });
      return;
    }

    const isoDate = new Date(DateOfJoining).toISOString();
    const query = `
      mutation AddEmployee($FirstName: String!, $LastName: String!, $Age: Int!, $DateOfJoining: DateTime!, $Title: String!, $Department: String!, $EmployeeType: String!) {
        createStaff(FirstName: $FirstName, LastName: $LastName, Age: $Age, DateOfJoining: $DateOfJoining, Title: $Title, Department: $Department, EmployeeType: $EmployeeType) {
          _id
        }
      }
    `;

    try {
      const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query,
          variables: { FirstName, LastName, Age: ageNum, DateOfJoining: isoDate, Title, Department, EmployeeType },
        }),
      });
      const result = await response.json();
      if (result.errors) throw new Error(result.errors[0].message);

      setState({
        FirstName: "",
        LastName: "",
        Age: "",
        DateOfJoining: "",
        Title: "",
        Department: "",
        EmployeeType: "",
        error: "",
        success: "Successfully Added!",
      });
      if (refresh) refresh();
      setTimeout(() => setState({ ...state, success: "" }), 2000);
    } catch (error) {
      setState({ ...state, error: error.message });
    }
  };

  const { error, success, FirstName, LastName, Age, DateOfJoining, Title, Department, EmployeeType } = state;

  return (
    <div>
      <style>
        {`
          .staff-add {
            max-width: 400px;
            width: 90%;
            margin: 20px auto;
            padding: 20px;
            background: #ffffff;
            border: 1px solid #d0d0d0;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .staff-add h3 { text-align: center; color: #1b5e20; margin-bottom: 15px; font-size: 1.2rem; }
          .staff-add label { display: block; margin: 10px 0 5px; font-size: 0.9rem; font-weight: 500; color: #333; }
          .staff-add input, .staff-add select { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #d0d0d0; border-radius: 4px; font-size: 0.9rem; box-sizing: border-box; transition: border-color 0.3s ease, box-shadow 0.3s ease; }
          .staff-add input:focus, .staff-add select:focus { border-color: #2e7d32; box-shadow: 0 0 5px rgba(46, 125, 50, 0.3); outline: none; }
          .staff-add button { background: #2e7d32; color: #fff; padding: 10px; border: none; border-radius: 4px; cursor: pointer; width: 100%; font-size: 0.9rem; transition: background-color 0.3s ease; }
          .staff-add button:hover { background: #1b5e20; }
          .msg-error { color: rgb(193, 37, 37); font-size: 0.85rem; text-align: center; margin: 10px 0; }
          .msg-success { color: #2e7d32; font-size: 0.85rem; text-align: center; margin: 10px 0; }
          @media (max-width: 600px) { .staff-add { width: 95%; padding: 15px; } .staff-add input, .staff-add select { font-size: 0.85rem; padding: 8px; } .staff-add button { font-size: 0.85rem; padding: 8px; } .staff-add h3 { font-size: 1rem; } }
        `}
      </style>
      <div className="staff-add">
        <h3>Add Employee</h3>
        {error && <p className="msg-error">{error}</p>}
        {success && <p className="msg-success">{success}</p>}
        <form onSubmit={submitForm}>
          <label>First Name:</label>
          <input type="text" name="FirstName" value={FirstName} onChange={updateField} required />
          <label>Last Name:</label>
          <input type="text" name="LastName" value={LastName} onChange={updateField} required />
          <label>Age:</label>
          <input type="number" name="Age" value={Age} onChange={updateField} min="20" max="70" required />
          <label>Join Date:</label>
          <input type="date" name="DateOfJoining" value={DateOfJoining} onChange={updateField} required />
          <label>Title:</label>
          <select name="Title" value={Title} onChange={updateField} required>
            <option value="">Select</option>
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
            <option value="Director">Director</option>
            <option value="VP">VP</option>
          </select>
          <label>Department:</label>
          <select name="Department" value={Department} onChange={updateField} required>
            <option value="">Select</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
          </select>
          <label>Type:</label>
          <select name="EmployeeType" value={EmployeeType} onChange={updateField} required>
            <option value="">Select</option>
            <option value="FullTime">FullTime</option>
            <option value="PartTime">PartTime</option>
            <option value="Contract">Contract</option>
            <option value="Seasonal">Seasonal</option>
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeCreate;