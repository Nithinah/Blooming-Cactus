import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = () => {
  const navigate = useNavigate();

  const handleSpaBooking = () => {
    navigate('/spa-booking'); // Navigate to spa booking page
  };

  const handleAdventureBooking = () => {
    navigate('/adventure-activities'); // Navigate to adventure activities page
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/images/resort-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        overflow: 'auto',
        position: 'relative',
      }}
    >
      <Layout>
        {/* Header Section */}
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <h1 style={{ textAlign: 'center', color: '#fff', marginBottom: '10px' }}>
            🌵 BLOOMING CACTUS 🌵
          </h1>

          {/* Contact Info */}
          <div
            style={{
              position: 'absolute',
              left: '-470px',
              top: '0',
              color: '#fff',
              fontSize: '14px',
              textAlign: 'left',
            }}
          >
            <p style={{ margin: '5px 0' }}>📞+91 7010895344</p>
            <p style={{ margin: '0' }}>📧nithin9804@gmail.com</p>
          </div>
        </div>

        {/* Login Options */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <div
            style={{ marginRight: '50px', textAlign: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/admin-login')}
          >
            <img
              src="/images/admin.png"
              alt="Admin Login"
              style={{ width: '70px', height: '70px', borderRadius: '10px' }}
            />
            <p style={{ color: '#fff' }}>Admin Login</p>
          </div>

          <div
            style={{ textAlign: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/user-login')}
          >
            <img
              src="/images/user.png"
              alt="User Login"
              style={{ width: '70px', height: '70px', borderRadius: '10px' }}
            />
            <p style={{ color: '#fff' }}>User Login</p>
          </div>
        </div>

        {/* LinkedIn Link */}
        <div
          style={{
            position: 'absolute',
            left: '25px',
            top: '53px',
            color: '#fff',
            fontSize: '14px',
          }}
        >
          <a
            href="https://www.linkedin.com/in/nithin-v-693a6a270/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Nithin's LinkedIn
          </a>
        </div>

        {/* Resort Features Section */}
        <div
          style={{
            marginTop: '50px',
            padding: '20px',
            maxHeight: '400px',
            overflowY: 'scroll',
            borderRadius: '15px',
          }}
        >
          <h2 style={{ textAlign: 'center', color: '#fff' }}>🌴 Our Resort Offers 🌴</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {[
              {
                title: 'Luxury Rooms & Suites',
                description: 'Our rooms are equipped with premium amenities and stunning views of nature.',
                image: '/images/DALL·E 2024-10-26 22.29.15 - A luxurious resort room with a comfortable king-sized bed, elegant decor, and a scenic window view of nature.webp', // Update with your image path
              },
              {
                title: 'Spa & Wellness',
                description: 'Relax and rejuvenate with our spa treatments and yoga sessions.',
                image: '/images/DALL·E 2024-10-26 23.57.50 - A peaceful spa setting with comfortable massage tables, scented candles, and soft lighting. The ambiance is serene, with greenery and soft towels neat.webp', // Update with your image path
                booking: true, // Booking enabled for this feature
              },
              {
                title: 'Adventure Activities',
                description: 'Explore hiking trails, zip-lining, and more outdoor adventures.',
                image: '/images/DALL·E 2024-10-27 00.10.09 - An adventure-themed image capturing a group of people exploring rugged, mountainous terrain with a waterfall in the background. The group is equipped .webp', // Update with your image path
                booking: true, // Booking enabled for this feature
              },
              {
                title: 'Infinity Pool',
                description: 'Enjoy the scenic beauty while swimming in our infinity pool.',
                image: '/images/DALL·E 2024-10-26 23.57.56 - An infinity pool at a luxurious resort with crystal-clear water, blending seamlessly into a beautiful ocean or mountain view. The setting is relaxing .webp', // Update with your image path
              },
              {
                title: 'Fine Dining',
                description: 'Indulge in world-class cuisines crafted by our chefs.',
                image: '/images/DALL·E 2024-10-27 00.10.15 - A cozy dining setting featuring a well-decorated table with candles, fine china, and elegant cutlery. Soft, warm lighting enhances the ambience, and a.webp', // Update with your image path
              },
              {
                title: 'Events & Celebrations',
                description: 'Host your special moments with us – weddings, parties, and more.',
                image: '/images/DALL·E 2024-10-27 00.10.20 - A vibrant event scene with a festive crowd, colorful lights, and decorations. The stage is set up with a performer engaging with an excited audience, .webp', // Update with your image path
              },
            ].map((feature, index) => (
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
                    src={feature.image}
                    alt={feature.title}
                    style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }}
                  />
                </div>
                <h3 style={{ color: '#2E8B57' }}>{feature.title}</h3>
                <p style={{ color: '#555555' }}>{feature.description}</p>
                {feature.booking && feature.title === 'Spa & Wellness' && (
                  <button
                    onClick={handleSpaBooking}
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
                )}
                {feature.booking && feature.title === 'Adventure Activities' && (
                  <button
                    onClick={handleAdventureBooking}
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
                )}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
