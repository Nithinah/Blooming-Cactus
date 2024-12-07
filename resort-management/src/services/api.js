import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Helper function for error handling
const handleError = (error) => {
  console.error('API Error:', error);
  throw error?.response?.data || 'Something went wrong';
};

// User Login
export const userLogin = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// User Registration
export const userRegister = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Fetch all bookings
export const getBookings = async () => {
  try {
    const response = await axios.get(`${API_URL}/bookings`);
    console.log('Bookings Data:', response.data); // Log the response for debugging
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Confirm a booking
export const confirmBooking = async (bookingId) => {
  try {
    const response = await axios.post(`${API_URL}/bookings/confirm/${bookingId}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Delete a booking
export const deleteBooking = async (bookingId) => {
  try {
    const response = await axios.delete(`${API_URL}/bookings/${bookingId}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
