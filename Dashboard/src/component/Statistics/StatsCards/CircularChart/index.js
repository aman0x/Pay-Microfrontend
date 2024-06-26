import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Overall Yay', 'Overall Nay', 'Group A Yay', 'Group A Nay', 'Group B Yay', 'Group B Nay', 'Group C Yay', 'Group C Nay','s'],
  datasets: [
    {
      backgroundColor: ['#ADA1E6', '#EEEFF0'],
      data: [68, 100],
      borderWidth:8,
      borderRadius: 10,
      
    },
    {
      backgroundColor: ['#FF7BBF', '#EEEFF0'],
      data: [58, 100],
      borderWidth:8,
      borderRadius: 10,
    },
    {
      backgroundColor: ['#964EC2', '#EEEFF0'],
      data: [12, 100],
      borderWidth:8,
      borderRadius: 10,
    },
    {
      backgroundColor: ['#D562BE', '#EEEFF0'],
      data: [25, 100],
      borderWidth:8,
      borderRadius: 10,
    },
    {
        backgroundColor: '#EEEFF0',
        data: 100,
       
     
    }
  ]
};

const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    hover: {
        mode: null 
    }
  };

function CircularChart() {
  return <Pie data={data} options={options} />;
}

export default CircularChart;
