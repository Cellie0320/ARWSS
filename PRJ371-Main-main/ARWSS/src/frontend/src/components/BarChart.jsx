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
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Paper',
        data: sortedData.map(item => item.paper),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: 'Metals',
        data: sortedData.map(item => item.metal),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
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