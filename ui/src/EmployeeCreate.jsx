import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Alert,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";

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

  // ---- helpers ----
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
    else if (ageNum < 20 || ageNum > 70)
      errs.Age = "Age must be between 20 and 70";

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
    if (isEmpty(vals.EmployeeType))
      errs.EmployeeType = "Employee type is required";

    return errs;
  };

  // ---- events ----
  const updateField = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));

    // live-validate if field was already touched
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

    // prevent double-submit
    if (state.loading) return;

    // full validation pass
    const errs = validateAll(state);
    setFieldErrors(errs);
    // mark all fields as touched so errors show
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
      // show a form-level error
      setState((prev) => ({
        ...prev,
        error: "Oops! Looks like some details are missing or incorrect.",
        success: "",
      }));
      // focus first invalid field
      const firstKey = Object.keys(errs)[0];
      const el = document.querySelector(`[name="${firstKey}"]`);
      if (el) el.focus();
      return;
    }

    const {
      FirstName,
      LastName,
      Age,
      DateOfJoining,
      Title,
      Department,
      EmployeeType,
    } = state;
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
      if (result.errors)
        throw new Error(result.errors[0].message || "Server error");

      // success reset
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
        loading: false,
      });
      setTouched({});
      setFieldErrors({});

      if (refresh) refresh();
      setTimeout(() => {
        setState((prev) => ({ ...prev, success: "" }));
        navigate("/employees");
      }, 1200);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message || "Failed to create employee.",
        loading: false,
      }));
    }
  };

  const {
    error,
    success,
    FirstName,
    LastName,
    Age,
    DateOfJoining,
    Title,
    Department,
    EmployeeType,
    loading,
  } = state;

  return (
    <>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div className="p-4 border rounded bg-white shadow">
              <h3 className="text-center text-success mb-4">Add Employee</h3>

              {/* form-level messages */}
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}
              {loading && (
                <div className="text-center">
                  <Spinner animation="border" variant="success" />
                </div>
              )}

              <Form onSubmit={submitForm} noValidate>
                <Row>
                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" controlId="FirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="FirstName"
                        value={FirstName}
                        onChange={updateField}
                        onBlur={handleBlur}
                        isInvalid={touched.FirstName && !!fieldErrors.FirstName}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {fieldErrors.FirstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" controlId="LastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="LastName"
                        value={LastName}
                        onChange={updateField}
                        onBlur={handleBlur}
                        isInvalid={touched.LastName && !!fieldErrors.LastName}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {fieldErrors.LastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" controlId="Age">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        name="Age"
                        value={Age}
                        onChange={updateField}
                        onBlur={handleBlur}
                        min="20"
                        max="70"
                        isInvalid={touched.Age && !!fieldErrors.Age}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {fieldErrors.Age}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" controlId="DateOfJoining">
                      <Form.Label>Join Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="DateOfJoining"
                        value={DateOfJoining}
                        onChange={updateField}
                        onBlur={handleBlur}
                        isInvalid={
                          touched.DateOfJoining && !!fieldErrors.DateOfJoining
                        }
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {fieldErrors.DateOfJoining}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" controlId="Title">
                      <Form.Label>Title</Form.Label>
                      <Form.Select
                        name="Title"
                        value={Title}
                        onChange={updateField}
                        onBlur={handleBlur}
                        isInvalid={touched.Title && !!fieldErrors.Title}
                        required
                      >
                        <option value="">Select</option>
                        <option value="Employee">Employee</option>
                        <option value="Manager">Manager</option>
                        <option value="Director">Director</option>
                        <option value="VP">VP</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {fieldErrors.Title}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" controlId="Department">
                      <Form.Label>Department</Form.Label>
                      <Form.Select
                        name="Department"
                        value={Department}
                        onChange={updateField}
                        onBlur={handleBlur}
                        isInvalid={
                          touched.Department && !!fieldErrors.Department
                        }
                        required
                      >
                        <option value="">Select</option>
                        <option value="IT">IT</option>
                        <option value="Marketing">Marketing</option>
                        <option value="HR">HR</option>
                        <option value="Engineering">Engineering</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {fieldErrors.Department}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="EmployeeType">
                  <Form.Label>Type</Form.Label>
                  <Form.Select
                    name="EmployeeType"
                    value={EmployeeType}
                    onChange={updateField}
                    onBlur={handleBlur}
                    isInvalid={
                      touched.EmployeeType && !!fieldErrors.EmployeeType
                    }
                    required
                  >
                    <option value="">Select</option>
                    <option value="FullTime">FullTime</option>
                    <option value="PartTime">PartTime</option>
                    <option value="Contract">Contract</option>
                    <option value="Seasonal">Seasonal</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {fieldErrors.EmployeeType}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="success"
                  type="submit"
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Spinner
                        size="sm"
                        className="me-2"
                        animation="border"
                        role="status"
                      />
                      Saving…
                    </>
                  ) : (
                    "Add Employee"
                  )}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EmployeeCreate;
