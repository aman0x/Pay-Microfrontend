import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const dataDemo = {
  Apr: 400,
  May: 300,
  Jun: 200,
  Jul: 400,
  Aug: 700,
  Sep: 900,
  Oct: 300,
  Nov: 250,
  Dec: 400,
};

import "./style.css";

function ChartComp({ index = 0, data1 = dataDemo, data2 = {} }) {
  const labels = Object.keys(data1 || data2);
  const amounts1 = Object.values(data1) || [
    0, 200, 300, 400, 600, 800, 1000, 400, 200,
  ];
  const amounts2 = [80, 500, 400, 300, 700, 900, 400, 200, 100];
  const data = {
    labels: labels,
    datasets: [
      index === 1 || index === 0
        ? {
            data: amounts1,
            pointRadius: 0,
            borderColor: "#E872D4",
            backgroundColor: "rgba(162, 220, 254, 0.5)",
            fill: true,
          }
        : {},
      index === 2 || index === 0
        ? {
            data: amounts2,
            pointRadius: 0,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          }
        : {},
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    tension: 0.4,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      elements: {
        point: {
          radius: 0,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
        border: {
          dash: [8, 4],
        },
      },
    },
  };
  return (
    <div className="chart-size">
      <Line options={options} data={data} />
    </div>
  );
}

export default ChartComp;
