// src/pages/UserLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin, userRegister } from '../services/api';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { user } = await userLogin({ email, password });
      console.log('User Logged In:', user);
      navigate('/rooms', { state: { userId: user._id } });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid email or password. Please register.');
      } else {
        setError(error.message || 'Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await userRegister({ email, password, username });
      setIsRegistering(false);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError('User already registered. Please login.');
      } else {
        setError(error.message || 'Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setIsRegistering(!isRegistering);
    setError('');
  };

  const isFormValid = isRegistering
    ? email && password && username
    : email && password;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("/images/tranquil-scene-sunset-water-nature-beauty-reflected-indoors-generated-by-artificial-intelligence.jpg")', // Use your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight overlay for contrast
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1>{isRegistering ? 'Register' : 'User Login'}</h1>
        <form
          onSubmit={isRegistering ? handleRegister : handleLogin}
          style={{ display: 'flex', flexDirection: 'column', width: '300px' }}
        >
          {isRegistering && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ marginBottom: '10px', padding: '10px', fontSize: '16px' }}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginBottom: '10px', padding: '10px', fontSize: '16px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: '10px', padding: '10px', fontSize: '16px' }}
          />
          <button
            type="submit"
            style={{ color: 'black' , padding: '10px', fontSize: '16px' }}
            disabled={!isFormValid || loading}
          >
            {loading ? 'Please wait...' : isRegistering ? 'Register' : 'Login'}
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </form>
        <p style={{ marginTop: '10px' }}>
          {isRegistering ? 'Already have an account? ' : "Don't have an account? "}
          <span onClick={switchMode} style={{ color: 'blue', cursor: 'pointer' }}>
            {isRegistering ? 'Login' : 'Register'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
