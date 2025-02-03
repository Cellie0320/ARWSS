import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';
import Plastic from './components/Plastic';
import Metal from './components/Metal';
import Paper from './components/Paper';
import Welcome from './components/Welcome';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate replace to="/welcome" />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/plastic" element={<Plastic />} />
      <Route path="/metal" element={<Metal />} />
      <Route path="/paper" element={<Paper />} />
    </Routes>
  </Router>
);

export default App;
