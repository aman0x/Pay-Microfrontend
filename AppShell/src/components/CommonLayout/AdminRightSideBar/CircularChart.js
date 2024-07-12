import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);



const CircularChart = ({index=0}) => {
  let datavar=[18, 13, 75]
  if(index>0){
    datavar=[84,16]
  }
  const data = {
    datasets: [{
      label: 'My First Dataset',
      data: datavar,
      backgroundColor: [
        '#964EC2',
        '#D562BE',
        '#EAE7F8'
      ],
      hoverOffset: 4
    }]
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  return <Doughnut data={data} options={options} />;
};

export default CircularChart;