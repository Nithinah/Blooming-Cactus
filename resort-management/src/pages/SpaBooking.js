// src/pages/SpaBooking.js
import React, { useState } from 'react';

const SpaBooking = () => {
  const [selectedSpa, setSelectedSpa] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [error, setError] = useState('');

  const spaOptions = [
    { name: 'Relaxation Spa', price: 3000 },
    { name: 'Therapeutic Spa', price: 5000 },
  ];

  const timeSlots = [
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedSpa || !selectedDate || !selectedTime) {
      setError('Please fill all the fields');
    } else {
      setError('');
      alert(`Booking successful for ${selectedSpa} on ${selectedDate} at ${selectedTime}`);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage:
          'url("/images/DALL·E 2024-10-27 19.56.59 - A serene and luxurious spa setting with warm ambient lighting. The spa features large, stone bathtubs filled with flowers and aromatic herbs, surround.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        gap: '20px', // Space between the two boxes
      }}
    >
      {/* About Section */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: '30px',
          borderRadius: '5px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          width: '60%', // Adjust width for better readability
          textAlign: 'center',
        }}
      >
        <p style={{ fontStyle: 'italic', color: 'black' }}>
          Indulge yourself in a sanctuary of peace and rejuvenation. At our spa, we blend ancient therapies with
          modern techniques, ensuring a holistic healing experience. Whether you choose the calming Relaxation Spa
          or the rejuvenating Therapeutic Spa, each session is designed to revitalize your body, mind, and spirit.
          Our expert therapists use premium oils and herbs, crafted to ease your stress and restore inner balance.
          The tranquil ambiance, aromatic fragrances, and personalized care create the perfect escape from the
          everyday grind. Come, unwind in our serene environment and awaken your senses. Discover a haven where
          luxury meets wellness. Let every moment in our spa be a step closer to tranquility. Book now and embrace
          a journey of pure bliss!
        </p>
      </div>

      {/* Booking Form */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          width: '400px',
        }}
      >
        <h1>Book a SPA</h1>
        <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '5px' }}>Select SPA Type</label>
          <select
            value={selectedSpa}
            onChange={(e) => setSelectedSpa(e.target.value)}
            required
            style={{ marginBottom: '15px', padding: '10px' }}
          >
            <option value="">--Select--</option>
            {spaOptions.map((spa, index) => (
              <option key={index} value={spa.name}>
                {spa.name} - ₹{spa.price}
              </option>
            ))}
          </select>

          <label style={{ marginBottom: '5px' }}>Select Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
            style={{ marginBottom: '15px', padding: '10px' }}
          />

          <label style={{ marginBottom: '5px' }}>Select Time Slot</label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
            style={{ marginBottom: '15px', padding: '10px' }}
          >
            <option value="">--Select--</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>

          <button
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Book Now
          </button>

          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SpaBooking;
