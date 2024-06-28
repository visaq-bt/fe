import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Info() {
  return (
    <Paper sx={container} elevation={12}>
      <Typography>HELLo</Typography>
    </Paper>
  );
}

const container = {
  width: "1380px",
  height: "400px",
  mx: "auto",
  p: "10px",
  backgroundColor: "#ede8d0",
};
