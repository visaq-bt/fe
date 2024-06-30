import { useState } from "react";

import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Divider from "@mui/material/Divider";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Info({ records }) {
  const [page, set_page] = useState(0);
  const switch_page = () => set_page((page + 1) % 2);

  const record = records[page];
  if (!record)
    return (
      <Paper elevation={12} sx={container}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontSize={30}>None</Typography>
          <SwapHorizIcon onClick={switch_page} />
        </Stack>
      </Paper>
    );

  const get_last = (e) => {
    try {
      const last_i = record.a.length - 1;
      return record[e][last_i];
    } catch (error) {
      return -1;
    }
  };

  return (
    <Paper elevation={12} sx={container}>
      <Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontSize={30}>{record.origin}</Typography>
          <SwapHorizIcon onClick={switch_page} />
        </Stack>

        <Typography fontSize={20}>{record.country}</Typography>

        <Stack direction="row" spacing={1}>
          {["a", "b", "c", "d"].map((e) => (
            <Typography
              key={e}
              sx={{ backgroundColor: color[e], ...btn }}
              fontSize={18}
            >
              {e.toUpperCase()}: {get_last(e)}
            </Typography>
          ))}
        </Stack>

        <Divider sx={{ my: 1 }} />

        <Typography fontSize={18}>{record.description}</Typography>
      </Stack>
    </Paper>
  );
}

const container = {
  width: 0.25,
  backgroundColor: "#ede8d0",
  p: "10px",
};

const color = {
  a: "#e9573f",
  b: "#8cc152",
  c: "#3bafda",
  d: "#967adc",
};

const btn = { px: "5px", py: "2px", border: 2, borderRadius: "5px", width: 1 };
