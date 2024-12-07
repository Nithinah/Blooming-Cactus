// src/pages/BookingSuccess.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { roomType } = location.state || {}; // Access the room type from navigation state

  const handleProceedToPayment = () => {
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <div
      style={{
        padding: '20px',
        textAlign: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("/images/DALL·E 2024-10-27 16.10.18 - A nighttime scene of a different luxurious resort with a unique architectural style, featuring open, airy structures and beautiful wooden accents. The.webp")', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff', // Set text color to white
      }}
    >
      <h1>Hola!! Booking Successful! Enjoy Your Stay at 🌵 BLOOMING CACTUS 🌵</h1>
      {roomType ? (
        <h2>You have booked the {roomType}.</h2>
      ) : (
        <h2>Your booking could not be confirmed. Please try again.</h2>
      )}
      <button onClick={handleProceedToPayment} style={styles.button}>
        Proceed to Payment
      </button>
      <button onClick={() => window.history.back()} style={styles.button}>
        Go Back
      </button>
    </div>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff', // Ensure button text stays white
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px', // Add some margin for spacing
  },
};

export default BookingSuccess;
