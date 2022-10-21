import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00CECE",
      contrastText: "white",
    },
    secondary: {
      main: "#FF7557",
      contrastText: "white",
    },
    neutralColor: {
      main: "#000000",
      contrastText: "white",
    },
  },
});

export default theme;
