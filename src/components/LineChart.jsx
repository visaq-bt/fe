import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import Box from "@mui/material/Box";

export default function LineChart({ dates }) {
  const data = {
    labels: dates.map((date) => `${date.getMonth() + 1}/${date.getDate()}`),
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return <Line data={data} options={options} />;
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};
