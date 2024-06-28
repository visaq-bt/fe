import { useState, useEffect } from "react";
import { get_dates } from "../helper.js";

import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Info() {
  return (
    <Paper sx={{ px: 2 }} elevation={12}>
      <Typography>A refers to Student/Exchange Visitors (F, M, J)</Typography>
      <Typography>
        B refers to Petition-Based Temporary Workers (H, L, O, P, Q)
      </Typography>
      <Typography>C refers to Crew and Transit (C, D, C1/D)</Typography>
      <Typography>D refers to Visitors (B1/B2)</Typography>
    </Paper>
  );
}

export default function Timeline({ set_dates, abcd, set_abcd }) {
  const [range, set_range] = useState();
  const [anchorEl, setAnchorEl] = useState();

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl();
  useEffect(() => update_dates("7d"), []);

  const update_dates = (type) => {
    set_range(type);

    var start = new Date();
    switch (type) {
      case "7d":
        start = new Date(start - 6 * 24 * 60 * 60 * 1000);
        break;

      case "1m":
        start.setMonth(start.getMonth() - 1);
        break;

      case "3m":
        start.setMonth(start.getMonth() - 3);
        break;

      case "ytd":
        start = new Date(start.getFullYear(), 0, 1);
        break;

      default:
        break;
    }
    set_dates(get_dates(start, new Date()));
  };

  return (
    <Stack
      justifyContent="space-between"
      sx={container}
      direction="row"
      alignItems="center"
    >
      <Stack direction="row" spacing={2}>
        <InfoOutlinedIcon onClick={handleClick} />
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Info />
        </Popover>

        <Stack direction="row" spacing={1}>
          {["a", "b", "c", "d"].map((e) => (
            <Typography
              variant="outline"
              sx={{
                ...btn,
                backgroundColor: abcd[e] && color[e],
              }}
              key={e}
              onClick={() => set_abcd({ ...abcd, [e]: !abcd[e] })}
            >
              {e.toUpperCase()}
            </Typography>
          ))}
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1}>
        {["7d", "1m", "3m", "ytd"].map((e) => (
          <Typography
            variant="outline"
            sx={{
              ...btn,
              backgroundColor: e === range && "#c9c5b1",
            }}
            key={e}
            onClick={() => update_dates(e)}
          >
            {e}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
}

const container = { width: 1 };

const color = {
  a: "#e9573f",
  b: "#8cc152",
  c: "#3bafda",
  d: "#967adc",
};

const btn = { px: "5px", py: "2px", border: 2, borderRadius: "5px" };
