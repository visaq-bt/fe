import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Layout() {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_URL}`)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Stack sx={container}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography sx={title}>Visaq</Typography>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography sx={nav}>Home</Typography>
          </Link>

          <Link to="/info" style={{ textDecoration: "none" }}>
            <Typography sx={nav}>Info</Typography>
          </Link>

          <Link
            to="https://b33t34.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography sx={contact}>About Me</Typography>
          </Link>
        </Stack>
      </Stack>

      <Outlet />
    </Stack>
  );
}

const container = {
  width: "1400px",
  height: "800px",
  m: "auto",
};

const title = {
  color: "white",
  fontSize: 60,
};

const nav = {
  color: "white",
  fontSize: 20,
  px: "5px",
  py: "2px",
};

const contact = {
  color: "white",
  fontSize: 20,
  px: "5px",
  py: "2px",
  border: 2,
  borderRadius: "5px",
};
