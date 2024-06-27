import { useState, useEffect } from "react";

import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function LineChart({ dates, records }) {
  const datasets = () => {
    let datasets = [];
    for (const key in records) {
      const record = records[key];
      if (record === null) continue;

      for (const x of "abcd") {
        let values = record[x];
        // console.log(values.length, dates.length);
        // if (dates.length !== records[0].a.length) values.push(null); // not updated yet today

        try {
          const data = values.slice(values.length - dates.length).map((e) => {
            if (e === -1) return null;
            return e;
          });

          const color = get_color(data[0], data[data.length - 1]);

          datasets.push({
            label: `${record.origin}:${x}`.toUpperCase(),
            backgroundColor: color,
            borderColor: color,
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

function get_color(n1, n2) {
  //   console.log(n1, n2);
  if (n2 === null || n1 < n2) return "#da4453"; // red
  return "#8cc152"; // green
}

const options = {};
