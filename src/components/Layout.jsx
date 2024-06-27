import axios from "axios";
import { useState, useEffect } from "react";

import Top from "./Top.jsx";
import Timeline from "./Timeline.jsx";
import LineChart from "./LineChart.jsx";
import Info from "./Info.jsx";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Layout() {
  const [dates, set_dates] = useState([]);
  const [records, set_records] = useState({ 0: null, 1: null });
  const [loading, set_loading] = useState(true);
  const [abcd, set_abcd] = useState({ a: true, b: true, c: true, d: true });

  useEffect(() => {
    document.title = "Visaq";
    axios
      .get(`${process.env.REACT_APP_BE_URL}`)
      .then((data) => set_loading(false))
      .catch((err) => set_loading(true));
  }, []);

  return (
    <Stack sx={container}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography sx={title}>Visaq</Typography>
        <Typography
          sx={contact}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/brian-tran-b33t34/",
              "_blank"
            )
          }
        >
          Contact Me
        </Typography>
      </Stack>

      {loading ? (
        <Typography color="white">loading...</Typography>
      ) : (
        <Stack spacing={2}>
          <Top records={records} set_records={set_records} />

          <Stack sx={content} direction="row" spacing={2}>
            <Paper elevation={12} sx={left}>
              <Stack sx={{ height: 1 }} justifyContent="space-between">
                <Timeline
                  abcd={abcd}
                  set_abcd={set_abcd}
                  set_dates={set_dates}
                />
                <LineChart abcd={abcd} dates={dates} records={records} />
              </Stack>
            </Paper>

            <Info records={records} />
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}

const container = {
  width: "1400px",
  height: "800px",
  m: "auto",
};

const content = {
  width: 1,
  height: 560,
};

const left = {
  width: 0.75,
  padding: "10px",
  backgroundColor: "#ede8d0",
};

const title = {
  color: "white",
  fontSize: 60,
};

const contact = {
  color: "white",
  fontSize: 20,
  px: "5px",
  py: "2px",
  border: 2,
  borderRadius: "5px",
};
