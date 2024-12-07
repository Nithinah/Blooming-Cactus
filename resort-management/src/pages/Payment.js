// src/pages/Payment.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    const { cardNumber, cardHolder, expiryDate, cvv } = paymentData;

    // Basic field validation
    if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
      alert('Please fill in all fields.');
      return;
    }

    // Card number validation: Only digits allowed (16 digits typical)
    if (!/^\d{16}$/.test(cardNumber)) {
      alert('Invalid card number. Enter 16-digit numeric value.');
      return;
    }

    // Expiry date validation: Must be in MM/YY format
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      alert('Invalid expiry date. Use MM/YY format.');
      return;
    }

    // CVV validation: Only 3 digits allowed
    if (!/^\d{3}$/.test(cvv)) {
      alert('CVV must be 3 digits.');
      return;
    }

    // Simulate payment processing
    alert('Payment Successful!');

    // Navigate back to the home page
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>Payment Gateway</h1>
        <form
          style={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handlePayment();
          }}
        >
          <label style={styles.label}>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your card number"
            />
          </label>
          <label style={styles.label}>
            Card Holder:
            <input
              type="text"
              name="cardHolder"
              value={paymentData.cardHolder}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter card holder's name"
            />
          </label>
          <label style={styles.label}>
            Expiry Date:
            <input
              type="text"
              name="expiryDate"
              value={paymentData.expiryDate}
              onChange={handleChange}
              style={styles.input}
              placeholder="MM/YY"
            />
          </label>
          <label style={styles.label}>
            CVV:
            <input
              type="text"
              name="cvv"
              value={paymentData.cvv}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter CVV"
            />
          </label>
          <button type="submit" style={styles.button}>
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundImage: 'url("/images/pexels-pierre-blache-651604-2901215.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  },
  box: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  title: {
    marginBottom: '20px',
    color: '#28a745',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    width: '100%',
  },
  label: {
    marginBottom: '15px',
    textAlign: 'left',
    width: '90%',
    color: '#555',
  },
  input: {
    padding: '10px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Payment;
