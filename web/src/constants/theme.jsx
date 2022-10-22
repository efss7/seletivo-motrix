import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      contrastText: "white",
    },
    secondary: {
      main: "#666666 ",
      contrastText: "white",
    },
    accentColor: {
      main: "#1673DE",
      contrastText: "white",
    },
  },
});

export default theme;
