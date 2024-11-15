// src/components/Dashboard.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Plastic.css';
import BarChart from './BarChart'; // Ensure you import the BarChart component

const Plastic = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [recyclingData, setRecyclingData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:5000/realtime-results')
        .then(response => response.json())
        .then(data => {
          console.log('Fetched data:', data); // Add this line
          // Filter data for the year 2024
          const filteredData = data.filter(item => item.year === 2024);
          setRecyclingData(filteredData);
        })
        .catch(error => console.error('Error fetching data:', error));
    };

    fetchData(); // Initial fetch
    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleStartStream = () => {
    setIsStreaming(true);
    // Logic to start the stream can be added here
  };

  const handleStopStream = () => {
    setIsStreaming(false);
    // Logic to stop the stream can be added here
  };

  return (
    <div className="plastic-dashboard">
      <h1>Welcome to the Plastic Dashboard</h1>

      {/* Live Stream Section */}
      <div className="plastic-recording">
        <h2>Simulation Recording</h2>
        {isStreaming ? (
          <div className="video">
<iframe width="800" height="600" src="https://www.youtube.com/embed/X5wXqER-7SA?si=PyPtDN7FKiHbdIwl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>          </div>
        ) : (
          <p>No stream currently running.</p>
        )}

        <div className="plastic-recording-controls">
          <button onClick={handleStartStream}>Start Recording</button>
          <button onClick={handleStopStream}>Stop Recording</button>
        </div>
      </div>

      {/* Fun Fact Section */}
      <div className="plastic-fact">
        <h2>Did you know?</h2>
        <p>Every year, 8 million metric tons of plastic end up in the ocean, causing serious damage to marine ecosystems.</p>
      </div>

      {/* Bar Chart Section */}
      <div className="bar-chart">
        <h2>Recycling Data</h2>
        <BarChart data={recyclingData} /> {/* Here is where the BarChart component is included */}
      </div>

      {/* Navigation Buttons */}
      <div className="plastic-nav">
        <Link to="/menu"  className="plastic-nav a">
          <button >Back to Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Plastic;
