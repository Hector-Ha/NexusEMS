import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Spinner, Breadcrumb, Row, Col } from 'react-bootstrap';

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
        const response = await fetch('/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query }),
        });
        const result = await response.json();
        if (result.errors) throw new Error(result.errors[0].message);
        if (!result.data.staffById) throw new Error('Employee not found');
        const data = result.data.staffById;
        setState({
          Title: data.Title || "",
          Department: data.Department || "",
          CurrentStatus: data.CurrentStatus.toString(),
          error: "",
          success: "",
          loading: false,
        });
      } catch (error) {
        setState((prev) => ({ ...prev, error: error.message, loading: false }));
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
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: mutation,
          variables: { id, Title, Department, CurrentStatus: CurrentStatus === "true" },
        }),
      });
      const result = await response.json();
      if (result.errors) throw new Error(result.errors[0].message);
      setState({ ...state, error: "", success: "Update Successful!", loading: false });
      setTimeout(() => navigate(`/employees/${id}`), 1000);
    } catch (error) {
      setState({ ...state, error: error.message, loading: false });
    }
  };

  if (state.loading) return <div className="text-center"><Spinner animation="border" variant="success" /></div>;
  if (state.error && !state.success) return <Alert variant="danger">{state.error}</Alert>;

  return (
    <>
      
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div className="p-4 border rounded bg-white shadow">
              <h3 className="text-center text-success mb-4">Update Employee</h3>
              {state.error && <Alert variant="danger">{state.error}</Alert>}
              {state.success && <Alert variant="success">{state.success}</Alert>}
              <Form onSubmit={submitForm}>
                <Row>
                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" controlId="Title">
                      <Form.Label>Title</Form.Label>
                      <Form.Select name="Title" value={state.Title} onChange={updateField} required>
                        <option value="">Select</option>
                        <option value="Employee">Employee</option>
                        <option value="Manager">Manager</option>
                        <option value="Director">Director</option>
                        <option value="VP">VP</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" controlId="Department">
                      <Form.Label>Department</Form.Label>
                      <Form.Select name="Department" value={state.Department} onChange={updateField} required>
                        <option value="">Select</option>
                        <option value="IT">IT</option>
                        <option value="Marketing">Marketing</option>
                        <option value="HR">HR</option>
                        <option value="Engineering">Engineering</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="CurrentStatus">
                  <Form.Label>Status</Form.Label>
                  <Form.Select name="CurrentStatus" value={state.CurrentStatus} onChange={updateField} required>
                    <option value="">Select</option>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="success" type="submit" className="w-100" disabled={state.loading}>
                  Update Employee
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EmployeeUpdate;