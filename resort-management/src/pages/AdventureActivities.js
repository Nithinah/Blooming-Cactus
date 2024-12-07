import React, { useState } from 'react';

const AdventureActivities = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingDetails, setBookingDetails] = useState(null);

  const activities = [
    {
      title: 'Hiking Trails',
      description:
        'Experience breathtaking views as you hike through scenic trails. This activity is perfect for nature lovers and adventure seekers alike. Our guided tours will take you through the best paths, ensuring safety and enjoyment. Ideal for all skill levels, this hike offers various trails to suit your preference.',
      image: '/images/DALL·E 2024-10-27 20.48.35 - A scenic hiking trail winding through a lush forest, with towering trees and sunbeams filtering through the leaves. The trail is lined with wildflower.webp',
      members: '1-5 Members',
      price: '₹500 per person',
    },
    {
      title: 'Zip-Lining',
      description:
        'Feel the thrill as you soar through the treetops on our zip-lining course. This exhilarating activity provides a unique perspective of the forest and is sure to get your adrenaline pumping. Our experienced staff will ensure you have a safe and fun experience while you take in the stunning views from above.',
      image: '/images/DALL·E 2024-10-27 20.47.27 - A thrilling wallpaper of a zip-lining adventure over a dense forest canopy. The zip-line stretches across vibrant green trees below, with a dynamic bl.webp',
      members: '1-4 Members',
      price: '₹700 per person',
    },
    {
      title: 'Kayaking',
      description:
        'Paddle through serene waters while enjoying the tranquility of nature. Our kayaking experience is suitable for all ages and skill levels. Explore beautiful lakes and rivers while learning about the local ecosystem. Equipment and safety gear are provided for your comfort and security.',
      image: '/images/DALL·E 2024-10-27 20.47.20 - A scenic wallpaper showcasing a kayaking adventure on a clear blue river surrounded by lush greenery, with majestic mountains in the background. The s.webp',
      members: '1-2 Members',
      price: '₹800 per person',
    },
  ];

  const timeSlots = [
    '07:00 AM - 09:00 AM',
    '09:00 AM - 11:00 AM',
    '11:00 AM - 01:00 PM',
    '01:00 PM - 03:00 PM',
    '03:00 PM - 05:00 PM',
  ];

  const handleBooking = (activity) => {
    if (selectedDate && selectedTime) {
      setBookingDetails({
        activity: activity.title,
        date: selectedDate,
        time: selectedTime,
      });
      setSelectedDate('');
      setSelectedTime('');
    } else {
      alert('Please select a date and a time slot.');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '20px',
        backgroundImage: 'url("/images/view-starry-night-sky-with-nature-mountains-landscape.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <h1 style={{ textAlign: 'center', color: 'white' }}>Adventure Activities</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          padding: '20px',
        }}
      >
        {activities.map((activity, index) => (
          <div
            key={index}
            style={{
              width: '30%',
              margin: '10px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              textAlign: 'center',
              backgroundColor: '#fff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={activity.image}
              alt={activity.title}
              style={{ maxWidth: '100%', maxHeight: '150px', borderRadius: '10px' }}
            />
            <h3 style={{ color: '#2E8B57' }}>{activity.title}</h3>
            <p style={{ color: '#555555' }}>{activity.description}</p>

            <p style={{ color: 'crimson' }}>
              <strong>Members:</strong> {activity.members}
            </p>
            <p style={{ color: 'crimson' }}>
              <strong>Price:</strong> {activity.price}
            </p>

            <div>
              <label htmlFor={`date-${index}`} style={{ color: 'crimson' }}>
                Select a date:
              </label>
              <input
                type="date"
                id={`date-${index}`}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                style={{ margin: '10px 0', padding: '5px', borderRadius: '5px' }}
              />
            </div>

            <div>
              <label htmlFor={`time-${index}`} style={{ color: 'crimson' }}>
                Select a time slot:
              </label>
              <select
                id={`time-${index}`}
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                style={{ margin: '10px 0', padding: '5px', borderRadius: '5px' }}
              >
                <option value="">Choose a time slot</option>
                {timeSlots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => handleBooking(activity)}
              style={{
                marginTop: '10px',
                padding: '8px 16px',
                backgroundColor: '#2E8B57',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {bookingDetails && (
        <div
          style={{
            marginTop: '20px',
            padding: '10px',
            border: '10px solid #ccc',
            borderRadius: '50px',
            backgroundColor: '#f9f9f9',
            textAlign: 'center',
          }}
        >
          <h3 style={{ color: '#2E8B57' }}>Booked Successfully!</h3>
          <p style={{ color: 'crimson' }}>
            <strong>Activity:</strong> {bookingDetails.activity}
          </p>
          <p style={{ color: 'crimson' }}>
            <strong>Date:</strong> {bookingDetails.date}
          </p>
          <p style={{ color: 'crimson' }}>
            <strong>Time:</strong> {bookingDetails.time}
          </p>
        </div>
      )}
    </div>
  );
};

export default AdventureActivities;
