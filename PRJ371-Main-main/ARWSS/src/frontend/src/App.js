import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';
/*import Dashboard from './components/Dashboard';*/
import Plastic from './components/Plastic';
import Metal from './components/Metal';
import Paper from './components/Paper';
import Welcome from './components/Welcome';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Welcome" />} />
        <Route path="/welcome" element={<Welcome />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
      
        <Route path="/plastic" element={<Plastic />} />
        <Route path="/metal" element={<Metal />} />
        <Route path="/paper" element={<Paper />} />
      </Routes>
    </Router>
  );
};

export default App;