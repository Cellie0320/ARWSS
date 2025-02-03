import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import BarChart from './BarChart';

const Dashboard = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [recyclingData, setRecyclingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/realtime-results');
        const data = await response.json();
        console.log('Fetched data:', data);

        // Filter data for the year 2024
        setRecyclingData(data.filter(item => item.year === 2024));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Initial fetch
    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="dashboard">
      <h1>Welcome to the Plastic Dashboard</h1>

      {/* Live Stream Section */}
      <section className="livestream">
        <h2>Live Stream</h2>
        {isStreaming ? (
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://youtu.be/OYpBaZVX8sA"
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
          <button onClick={() => setIsStreaming(true)}>Start Sorting</button>
          <button onClick={() => setIsStreaming(false)}>Stop Sorting</button>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="fun-fact">
        <h2>Fun Fact About Plastic</h2>
        <p>Did you know? Every year, 8 million metric tons of plastic end up in the ocean, causing serious damage to marine ecosystems.</p>
      </section>

      {/* Bar Chart Section */}
      <section className="bar-chart">
        <h2>Recycling Data</h2>
        <BarChart data={recyclingData} />
      </section>

      {/* Navigation Buttons */}
      <nav className="navigation">
        <Link to="/menu">
          <button>Back to Menu</button>
        </Link>
      </nav>
    </div>
  );
};

export default Dashboard;
