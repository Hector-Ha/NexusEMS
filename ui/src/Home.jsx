import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Alert, Spinner } from 'react-bootstrap';
import StaffGrid from './StaffGrid.jsx';

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // API/network errors only (not used for "can't delete active")
  const [error, setError] = useState(null);

  // success banner after real deletes
  const [success, setSuccess] = useState('');

  // single, dismissible alert for blocking active deletes
  const [deleteError, setDeleteError] = useState('');

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

  const isActive = (status) =>
    status === true || status === 'Active' || status === 1 || status === '1';

  // IMPORTANT: accept (id, status)
  const handleDelete = async (id, status) => {
    // Block deletion when active
    if (isActive(status)) {
      setDeleteError("CAN'T DELETE EMPLOYEE – STATUS ACTIVE");
      setTimeout(() => setDeleteError(''), 5000); // auto-hide
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
      <h1 className="text-center text-success mb-4">Welcome to Employee Management System</h1>

      {/* single dismissible alert for active-delete block */}
      {deleteError && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {deleteError}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}

      {/* API/network errors (not used for active-delete) */}
      {error && <Alert variant="danger">{error}</Alert>}

      {success && <Alert variant="success">{success}</Alert>}

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="success" />
        </div>
      )}

      {!loading && (
        <StaffGrid
          employees={employees}
          loading={false}
          error={null} 
          onRowClick={handleRowClick}
          onDelete={handleDelete} 
        />
      )}
    </Container>
  );
};

export default Home;
