import { Link } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Info() {
  return (
    <Paper sx={container} elevation={12}>
      <Typography variant="h4">What is Visaq?</Typography>
      <Typography fontSize={20}>
        Visaq displays information on visa queue times from posts around the
        world. Number data is collected from{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
          to="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html"
        >
          US Global Visa Wait Times
        </Link>
        . Other description and classification data is ai generated. If you have
        any concerns with the accuracy of the data, then please contact me. This
        website is very rudimentary, because I am just one person, and it is
        mostly meant to showcase my web develepment skills to prospective
        employers.
      </Typography>
      <br />
      <Typography color="red" variant="h4">
        Why is it taking so long to load?
      </Typography>
      <Typography fontSize={20}>
        This website uses FREE website hosting, which means it is 1. FREE and 2.
        slow.
      </Typography>
      <br />
      <Typography variant="h4">Important to note are the following:</Typography>
      <Typography fontSize={20}>
        A refers to Student/Exchange Visitors (F, M, J)
        <br />B refers to Petition-Based Temporary Workers (H, L, O, P, Q)
        <br />C refers to Crew and Transit (C, D, C1/D)
        <br />D refers to Visitors (B1/B2)
      </Typography>
      <br />

      <Typography align="center">
        Crontab runs daily
        <br />
        Py webscrapes, js uploads
        <br />
        Free mongodb
      </Typography>
    </Paper>
  );
}

const container = {
  width: "1380px",
  mx: "auto",
  p: "10px",
  backgroundColor: "#ede8d0",
};
