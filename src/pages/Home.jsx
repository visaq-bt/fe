import axios from "axios";
import { useState, useEffect } from "react";

// import { get_dates } from "../helper.js";
import Top from "../components/Top.jsx";
import Timeline from "../components/Timeline.jsx";
import LineChart from "../components/LineChart.jsx";
import Info from "../components/Info.jsx";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Home() {
  const [dates, set_dates] = useState([]);
  const [records, set_records] = useState({ 0: null, 1: null });
  const [loading, set_loading] = useState(true);
  const [abcd, set_abcd] = useState({ a: true, b: true, c: true, d: true });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_URL}/origin/Paris`)
      .then((data) => {
        // const today = new Date();
        // const updated =
        //   data.data.a.length ===
        //   get_dates(new Date(today.getFullYear(), 0, 1), today).length;

        set_records({ ...records, 0: data.data });
        set_loading(false);
      })
      .catch((err) => {
        console.log(err);
        set_loading(true);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Typography color="white">
          Loading. This website uses free hosting, which means this might take a
          while...
        </Typography>
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
    </>
  );
}

const content = {
  width: 1,
  height: 560,
};

const left = {
  width: 0.75,
  padding: "10px",
  backgroundColor: "#ede8d0",
};
