import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function Top() {
  const [value, set_value] = useState("EUR");

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Stack sx={container} direction="row">
      <TextField
        sx={textfield}
        onChange={(e) => set_value(e.target.value)}
        select
        defaultValue="EUR"
        variant="standard"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <p>884</p>
    </Stack>
  );
}

const container = {
  width: 1,
  backgroundColor: "lightgreen",
};

const textfield = {
  width: 100,
};

const btn = {};
