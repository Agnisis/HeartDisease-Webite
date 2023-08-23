import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Form Data',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: Object.values(data),
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">Chart</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;
