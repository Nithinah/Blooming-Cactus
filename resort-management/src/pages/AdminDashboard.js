import React, { useEffect, useState } from 'react';
import { getBookings, confirmBooking, deleteBooking } from '../services/api';

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const data = await getBookings();
      setBookings(data);
    };
    fetchBookings();
  }, []);

  const handleConfirm = async (id) => {
    await confirmBooking(id);
    setBookings(bookings.map(b => b._id === id ? { ...b, status: 'Confirmed' } : b));
  };

  const handleDelete = async (id) => {
    await deleteBooking(id);
    setBookings(bookings.filter(b => b._id !== id));
  };

  return (
    <div style={dashboardStyle}>
      <h1 style={headingStyle}>Admin Dashboard</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>User</th>
            <th style={headerStyle}>Room</th>
            <th style={headerStyle}>Status</th>
            <th style={headerStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b._id}>
              <td style={cellStyle}>{b.user.username}</td>
              <td style={cellStyle}>{b.roomNumber}</td>
              <td style={cellStyle}>{b.status}</td>
              <td style={cellStyle}>
                <button onClick={() => handleConfirm(b._id)} style={confirmButtonStyle}>Confirm</button>
                <button onClick={() => handleDelete(b._id)} style={deleteButtonStyle}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Styles
const dashboardStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f4f4f4',
  minHeight: '100vh',
  backgroundImage: 'url("/images/nature-landscape-with-starry-clear-sky.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const headingStyle = {
  color: 'beige', // Beige color for the heading
  marginBottom: '20px',
};

const tableStyle = {
  margin: '20px auto',
  borderCollapse: 'collapse',
  width: '80%',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  backgroundColor: '#007bff',
  color: 'beige', // Beige text for headers
  padding: '15px',
  border: '1px solid #ddd',
  fontWeight: 'bold', // Make header text bold
};

const cellStyle = {
  border: '1px solid #ddd',
  padding: '15px',
  color: 'beige', // Beige text for table cells
  fontWeight: 'bold', // Make cell text bold
};

const confirmButtonStyle = {
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 15px',
  marginRight: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const deleteButtonStyle = {
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 15px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

// Add hover effects for buttons
confirmButtonStyle[':hover'] = {
  backgroundColor: '#218838',
};

deleteButtonStyle[':hover'] = {
  backgroundColor: '#c82333',
};

export default AdminDashboard;
