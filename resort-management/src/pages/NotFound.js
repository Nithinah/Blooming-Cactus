// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default NotFound;
