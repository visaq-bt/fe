import { useState } from "react";

import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Divider from "@mui/material/Divider";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
      <Stack spacing={1}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontSize={30}>{record.origin}</Typography>
          <SwapHorizIcon onClick={switch_page} />
        </Stack>

        <Stack direction="row">
          {["a", "b", "c", "d"].map((e) => (
            <Typography key={e} sx={{ width: 0.25 }} fontSize={18}>
              {e.toUpperCase()}: {get_last(e)}
            </Typography>
          ))}
        </Stack>

        <Divider />

        <Typography fontSize={18}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Stack>
    </Paper>
  );
}

const container = {
  width: 0.25,
  backgroundColor: "#ede8d0",
  p: "10px",
};
