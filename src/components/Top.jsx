import { useState, useEffect } from "react";
import axios from "axios";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

// import { get_dates } from "../helper.js";

export default function Top({ records, set_records }) {
  const [origins, set_origins] = useState(["Paris"]);
  const [sortby, set_sortby] = useState(SORTBYS[0]);
  const [catergory, set_catergory] = useState(CATEGORIES[0]);

  const change_record = (i, origin) => {
    if (origin === "None") set_records({ ...records, [i]: null });
    else
      axios
        .get(`${process.env.REACT_APP_BE_URL}/origin/${origin}`)
        .then((data) => {
          // const today = new Date();
          // const updated =
          //   data.data.a.length ===
          //   get_dates(new Date(today.getFullYear(), 0, 1), today).length;

          set_records({ ...records, [i]: data.data });
        })
        .catch((err) => {
          console.log(err);
          set_records({ ...records, [i]: null });
        });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_URL}/origins/${catergory}/${sortby}`)
      .then((data) => {
        set_origins(data.data);
      })
      .catch((err) => console.log(err));
  }, [catergory, sortby]);

  return (
    <Paper elevation={12} sx={container}>
      <Stack spacing={1}>
        <Stack direction="row" spacing={2}>
          <Select
            sx={top}
            value={records[0] ? records[0].origin : "None"}
            onChange={(e) => change_record(0, e.target.value)}
          >
            <MenuItem key="None" value="None">
              None
            </MenuItem>
            {origins.map((e) => (
              <MenuItem key={e} value={e}>
                {e}
              </MenuItem>
            ))}
          </Select>

          <Select
            sx={top}
            value={records[1] ? records[1].origin : "None"}
            onChange={(e) => change_record(1, e.target.value)}
          >
            <MenuItem key="None" value="None">
              None
            </MenuItem>
            {origins.map((e) => (
              <MenuItem key={e} value={e}>
                {e}
              </MenuItem>
            ))}
          </Select>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Select
            sx={bottom}
            onChange={(e) => {
              set_records({ 0: null, 1: null });
              set_catergory(e.target.value);
            }}
            value={catergory}
          >
            {CATEGORIES.map((e) => (
              <MenuItem key={e} value={e}>
                {e}
              </MenuItem>
            ))}
          </Select>

          <Select
            sx={bottom}
            onChange={(e) => set_sortby(e.target.value)}
            value={sortby}
          >
            {SORTBYS.map((e) => (
              <MenuItem key={e} value={e}>
                {e}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Stack>
    </Paper>
  );
}

const container = {
  width: "calc(100% - 20px)",
  p: "10px",
  backgroundColor: "#ede8d0",
};

const top = {
  height: 40,
  width: 1,
  fontSize: 30,
};

const bottom = {
  height: 20,
  width: 200,
};

const SORTBYS = [
  "high to low volatility",
  "low to high volatility",
  "A-z",
  "relevance",
];

const CATEGORIES = [
  "all",
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "Oceania",
  "South America",
];
