import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Rooms = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId;

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 4,
    rooms: 1,
    roomType: '',
  });

  const roomPrices = {
    'Elite Room': 5000,
    'Luxury Room': 3000,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoomSelection = (roomType) => {
    setFormData({ ...formData, roomType });
  };

  const handleBooking = async () => {
    if (!formData.roomType) {
      alert('Please select a room type before booking.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/book-room', {
        userId,
        roomType: formData.roomType,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
      });

      navigate('/booking-success', { state: { roomType: formData.roomType } });
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Booking failed. Please try again.');
    }
  };

  const getNumberOfNights = () => {
    const { checkIn, checkOut } = formData;
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffInTime = end - start;
    const nights = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 1;
  };

  const calculateTotalPrice = () => {
    const { roomType, rooms } = formData;
    const pricePerNight = roomPrices[roomType] || 0;
    const nights = getNumberOfNights();
    return pricePerNight * rooms * nights;
  };

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif', 
      backgroundImage: 'url("/images/pexels-asadphoto-1450363.jpg")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'beige' }}>
          Check-in:
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'beige' }}>
          Check-out:
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={selectContainerStyle}>
          <label style={{ color: 'beige' }}>Guests:</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            style={selectStyle}
          >
            {[...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
        </div>
        <div style={selectContainerStyle}>
          <label style={{ color: 'beige' }}>Rooms:</label>
          <select
            name="rooms"
            value={formData.rooms}
            onChange={handleChange}
            style={selectStyle}
          >
            {[...Array(5).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <RoomCard
          roomType="Elite Room"
          description="Indulge in luxury and comfort with our Elite Room. Features a king-size bed, private balcony, and en-suite bathroom."
          price={roomPrices['Elite Room']}
          imageUrl="/images/DALL·E 2024-10-27 15.31.41 - A luxury hotel room with opulent design, featuring a king-size bed with a tufted velvet headboard and silk pillows. The room has marble flooring, gold.webp"
          selected={formData.roomType === 'Elite Room'}
          onSelect={handleRoomSelection}
        />
        <RoomCard
          roomType="Luxury Room"
          description="Experience the best of our offerings with the Luxury Room. Offers stunning views, a plush seating area, and premium amenities."
          price={roomPrices['Luxury Room']}
          imageUrl="/images/DALL·E 2024-10-27 15.31.32 - An elite room in a luxury hotel, featuring modern and elegant design. The room has a king-size bed with high-quality linens, a stylish headboard, and .webp"
          selected={formData.roomType === 'Luxury Room'}
          onSelect={handleRoomSelection}
        />
      </div>

      <div style={{ color: 'beige', textAlign: 'center', marginTop: '20px' }}>
        <h3>Total Price: Rs {calculateTotalPrice()}</h3>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button onClick={handleBooking} style={buttonStyle}>Book Now</button>
      </div>
    </div>
  );
};

const RoomCard = ({ roomType, description, price, imageUrl, selected, onSelect }) => (
  <div
    style={{
      border: selected ? '2px solid green' : '1px solid grey',
      padding: '10px',
      borderRadius: '10px',
      transition: '0.3s',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '300px',
      textAlign: 'center',
      backgroundColor: '#fff',
    }}
    onClick={() => onSelect(roomType)}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px',
        marginBottom: '10px',
      }}
    >
      <img
        src={imageUrl}
        alt={roomType}
        style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }}
      />
    </div>
    <h2 style={{ color: '#2E8B57' }}>{roomType}</h2>
    <p style={{ color: '#555555' }}>{description}</p>
    <p style={{ fontWeight: 'bold', color: '#2E8B57' }}>
      Rs {price} per night (*4 pax)
    </p>
  </div>
);

const inputStyle = {
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '150px',
};

const selectContainerStyle = {
  margin: '0 15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const selectStyle = {
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '100px',
  marginTop: '5px',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: 'green',
  color: 'white',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export default Rooms;
