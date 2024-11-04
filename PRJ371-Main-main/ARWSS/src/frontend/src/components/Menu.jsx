// src/components/Menu.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const [bgColor, setBgColor] = useState('#93d366 ');
  const location = useLocation();
  const userName = location.state?.userName || ''; // Retrieve userName from location.state

  useEffect(() => {
    const isFirstVisit = sessionStorage.getItem('isFirstVisit');
    if (!isFirstVisit) {
      window.scrollTo(0, 0);
      sessionStorage.setItem('isFirstVisit', 'true');
    }
  }, []);

  const handleMouseEnter = (color) => {
    setBgColor(color);
  };

  const handleMouseLeave = () => {
    setBgColor('#93d366 ');
  };

  return (
    <div className="menu" style={{ backgroundColor: bgColor }}>
      <h2>Let's Recycle!</h2>
      {userName && <h2>Hello, {userName}!</h2>} {/* Conditionally render greeting */}
      <h1>Select a Material to Recycle</h1>

      <div className="menu-options">
        <div className="material-buttons">
          <Link to="/plastic">
            <button 
              className="plastic-menu-button" 
              onMouseEnter={() => handleMouseEnter('#A7C7E7')} 
              onMouseLeave={handleMouseLeave}
            >
              Plastic
            </button>
          </Link>
          <Link to="/metal">
            <button 
              className="metal-menu-button" 
              onMouseEnter={() => handleMouseEnter('#c4c4c4')} 
              onMouseLeave={handleMouseLeave}
            >
              Metal
            </button>
          </Link>
          <Link to="/paper">
            <button 
              className="paper-menu-button" 
              onMouseEnter={() => handleMouseEnter('#ffb535')} 
              onMouseLeave={handleMouseLeave}
            >
              Paper
            </button>
          </Link>
        </div>
      </div>

      <footer className="footer">
        <p>Thank you for using our recycling app!</p>
        <Link to="/login">
          <button 
            className="logout-menu-button" 
            onMouseEnter={() => handleMouseEnter('#00cc00')} 
            onMouseLeave={handleMouseLeave}
          >
            Log Out
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default Menu;