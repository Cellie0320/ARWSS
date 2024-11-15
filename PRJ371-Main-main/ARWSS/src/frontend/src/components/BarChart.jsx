import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  // Extract unique years
  const years = [...new Set(data.map(item => item.year))];

  // Sort data by year
  const sortedData = data.sort((a, b) => a.year - b.year);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Plastics',
        data: sortedData.map(item => item.plastic),
        backgroundColor: 'rgba(0, 0, 128, 1)',
      },
      {
        label: 'Paper',
        data: sortedData.map(item => item.paper),
        backgroundColor: 'rgba(204, 85, 0, 1)',
      },
      {
        label: 'Metals',
        data: sortedData.map(item => item.metal),
        backgroundColor: 'rgba(70, 79, 80, 0.5)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Quantity of Materials',
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;