import { useState, useEffect } from "react";

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function LineChart({ dates, records, abcd }) {
  const datasets = () => {
    let datasets = [];
    for (const key in records) {
      const record = records[key];
      if (record === null) continue;

      for (const x of "abcd") {
        if (!abcd[x]) continue;
        let values = record[x];

        try {
          const data = values.slice(values.length - dates.length).map((e) => {
            if (e === -1) return null;
            return e;
          });

          datasets.push({
            label: `${record.origin}:${x}`.toUpperCase(),
            backgroundColor: color[`${x}${key}`],
            borderColor: color[`${x}${key}`],
            data: data,
          });
        } catch (error) {
          return [];
        }
      }
    }

    return datasets;
  };

  const data = {
    labels: dates.map((date) => `${date.getMonth() + 1}/${date.getDate()}`),
    datasets: datasets(),
  };
  return <Line data={data} options={options} />;
}

const color = {
  a0: "#e9573f",
  a1: "#fc6e51",
  b0: "#8cc152",
  b1: "#a0d468",
  c0: "#3bafda",
  c1: "#4fc1e9",
  d0: "#967adc",
  d1: "#ac92ec",
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};
