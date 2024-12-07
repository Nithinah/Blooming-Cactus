// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpaBooking from './pages/SpaBooking'; // Import the new SpaBooking page
import AdventureActivities from './pages/AdventureActivities';
import UserLogin from './pages/UserLogin';
import AdminLogin from './pages/AdminLogin';
import Rooms from './pages/Room';
import BookingSuccess from './pages/BookingSuccess';
import Payment from './pages/Payment';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spa-booking" element={<SpaBooking />} /> {/* Add this route */}
        <Route path="/adventure-activities" element={<AdventureActivities />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
