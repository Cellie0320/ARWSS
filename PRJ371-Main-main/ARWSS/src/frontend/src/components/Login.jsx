import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Login.css';

// Hardcoded users and passwords
const users = {
  Marcel: 'marcel',
  Mia: 'mia',
  Mbuti: 'mbuti',
  Lesedi: 'lesedi',
  Lehlonolo: 'lehlonolo'
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = () => {
    if (!users[email]) {
      setErrorMessage('Invalid username');
    } else if (users[email] !== password) {
      setErrorMessage('Invalid password');
    } else {
      console.log('Login successful');
      navigate('/menu'); // Navigate to the dashboard
    } 
  };

  return (
    <div className="login-container">
      {/* <h1 className="login-heading">Automated Robotic Sorting System</h1> */}
      <div className="login">
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;