import axios from "axios";
import { useState, useEffect } from "react";

import Top from "./Top.jsx";
import Timeline from "./Timeline.jsx";
import LineChart from "./LineChart.jsx";
import Info from "./Info.jsx";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Layout() {
  const [dates, set_dates] = useState([]);
  const [datasets, set_datasets] = useState([]);

  return (
    <Stack sx={container} spacing={2}>
      <Typography>Global Visa Wait Times</Typography>

      <Top />

      <Stack sx={content} direction="row" spacing={2}>
        <Stack sx={left}>
          <Timeline set_dates={set_dates} />
          <LineChart dates={dates} datasets={datasets} />
        </Stack>
        <Info />
      </Stack>
    </Stack>
  );
}

const container = {
  width: 1400,
  height: 1,
  backgroundColor: "red",
  m: "auto",
};

const content = {
  width: 1,
  height: 600,
  backgroundColor: "pink",
};

const left = {
  width: 0.75,
  backgroundColor: "lightblue",
};
