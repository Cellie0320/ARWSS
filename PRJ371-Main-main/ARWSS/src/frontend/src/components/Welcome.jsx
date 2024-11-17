import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import logo from '../ARWSS_Logo.webp';

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      navigate('/login');
    }, 10000); // Redirect after 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  return (
    <div className="welcome-container">
      <div className="welcome-message-container">
        <img
          className="welcome-logo"
          src={logo}
          alt="ARWSS Logo"
        />
        <div className="welcome-text">
          <h1 className="welcome-title">Welcome to the Automated Robotic Waste Sorting  System</h1>
          <p className="welcome-description">
            The system that stays on track!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;