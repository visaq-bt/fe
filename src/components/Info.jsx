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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          mauris commodo quis. Faucibus nisl tincidunt eget nullam non nisi est
          sit amet. Quis varius quam quisque id. Tellus integer feugiat
          scelerisque varius. Bibendum neque egestas congue quisque egestas diam
          in arcu. Quis varius quam quisque id diam vel. Lobortis scelerisque
          fermentum dui faucibus in ornare quam. Eget dolor morbi non arcu risus
          quis varius quam. Eget nunc lobortis mattis aliquam faucibus purus in
          massa tempor.
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
