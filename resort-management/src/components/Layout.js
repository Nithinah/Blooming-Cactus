// src/components/Layout.js
import React from 'react';

const layoutStyle = {
  backgroundImage: `url("/images/pexels-pixabay-258154.jpg")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};

const Layout = ({ children }) => {
  return <div style={layoutStyle}>{children}</div>;
};

export default Layout;
