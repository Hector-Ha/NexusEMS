import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Alert, Spinner } from 'react-bootstrap';
import StaffGrid from './StaffGrid.jsx';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const result = await response.json();
      if (result.errors) throw new Error(result.errors[0].message);
      setEmployees(result.data.staffList || []);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to load employees.');
    } finally {
      setLoading(false);
    }
  };

  // Treat various "active" encodings as active
  const isActive = (status) =>
    status === true || status === 'Active' || status === 1 || status === '1';

  // onDelete now accepts (id, status)
  const handleDelete = async (id, status) => {
    // Block deletion when active
    if (isActive(status)) {
      setDeleteError("CAN'T DELETE EMPLOYEE – STATUS ACTIVE");
      setTimeout(() => setDeleteError(''), 5000);
      return;
    }

    setLoading(true);
    const mutation = `
      mutation {
        deleteStaff(id: "${id}")
      }
    `;
    try {
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: mutation }),
      });
      const result = await response.json();
      if (result.errors) throw new Error(result.errors[0].message);

      if (result.data.deleteStaff) {
        await fetchEmployees();
        setSuccess('Employee deleted successfully!');
        setTimeout(() => setSuccess(''), 2000);
      } else {
        throw new Error('Delete operation failed');
      }
    } catch (err) {
      setError(err.message || 'Delete failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleRowClick = (id) => navigate(`/employees/${id}`);

  return (
    <Container className="mt-4">
      <h2 className="text-center text-success mb-4">Employee List</h2>

      {/* Single dismissible alert for active delete block */}
      {deleteError && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {deleteError}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="success" />
        </div>
      )}

      <Form.Group className="mb-3">
        <Form.Label>Filter by Employee Type</Form.Label>
        <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="FullTime">FullTime</option>
          <option value="PartTime">PartTime</option>
          <option value="Contract">Contract</option>
          <option value="Seasonal">Seasonal</option>
        </Form.Select>
      </Form.Group>

      <StaffGrid
        employees={employees}
        loading={loading}
        error={error}
        onRowClick={handleRowClick}
        onDelete={handleDelete} 
      />
    </Container>
  );
};

export default EmployeeList;
