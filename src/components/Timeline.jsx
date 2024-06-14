import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useState, useEffect } from "react";

const get_dates = function (start, end) {
  const dates = [];
  for (
    const date = new Date(start);
    date <= new Date(end);
    date.setDate(date.getDate() + 1)
  ) {
    dates.push(new Date(date));
  }
  return dates;
};

export default function Timeline({ set_dates }) {
  const [range, set_range] = useState();

  useEffect(() => {
    update_dates("7d");
  }, []);

  const update_dates = (type) => {
    set_range(type);

    var start = new Date();
    switch (type) {
      case "7d":
        start = new Date(start - 7 * 24 * 60 * 60 * 1000);
        break;

      case "1m":
        start.setMonth(start.getMonth() - 1);
        break;

      case "3m":
        start.setMonth(start.getMonth() - 3);
        break;

      case "ytd":
        start.setYear(start.getFullYear() - 1);
        break;
    }
    set_dates(get_dates(start, new Date()));
  };

  return (
    <Stack sx={container} direction="row" justifyContent="space-between">
      <Stack direction="row">
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </Stack>

      <Stack direction="row">
        {["7d", "1m", "3m", "ytd"].map((e) => (
          <Button onClick={() => update_dates(e)}>{e}</Button>
        ))}
      </Stack>
    </Stack>
  );
}

const container = {
  width: 1,
  backgroundColor: "lightgreen",
};

const btn = {};
