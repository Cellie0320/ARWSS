import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import BarChart from './BarChart'; // Ensure you import the BarChart component

const Dashboard = () => {
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
    <div className="dashboard">
      <h1>Welcome to the Plastic Dashboard</h1>

      {/* Live Stream Section */}
      <div className="livestream">
        <h2>Live Stream</h2>
        {isStreaming ? (
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://youtu.be/OYpBaZVX8sA" 
              // Placeholder for live stream
              title="Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p>No stream currently running.</p>
        )}

        <div className="livestream-controls">
          <button onClick={handleStartStream}>Start Sorting</button>
          <button onClick={handleStopStream}>Stop Sorting</button>
        </div>
      </div>

      {/* Fun Fact Section */}
      <div className="fun-fact">
        <h2>Fun Fact About Plastic</h2>
        <p>Did you know? Every year, 8 million metric tons of plastic end up in the ocean, causing serious damage to marine ecosystems.</p>
      </div>

      {/* Bar Chart Section */}
      <div className="bar-chart">
        <h2>Recycling Data</h2>
        <BarChart data={recyclingData} /> {/* Pass the filtered data to the BarChart component */}
      </div>

      {/* Navigation Buttons */}
      <div className="navigation">
        <Link to="/menu">
          <button>Back to Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;