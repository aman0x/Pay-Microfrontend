import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from "@faker-js/faker"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  maintainAspectRatio: false,
  tension:0.4,
  plugins: {
    legend: {
      position: 'bottom' 
    },
    tooltip: {
      enabled: false,  
    },
    elements:{
      point:{
        radius:0
      }
    }
  },
};

const labels = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'];
const amounts1 = [0,200,300,400,600,800,900,400,200]
const amounts2 = [80,500,400,300,700,900,400,200,100]
 const data = {
  labels:labels,
  datasets: [
    {
      data: amounts1,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      data: amounts2,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
 function ChartComp() {
  return <Line options={options} data={data} />;
}

export default ChartComp;
