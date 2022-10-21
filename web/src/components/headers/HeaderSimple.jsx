import {
  AppBar, Box, Toolbar, Typography,
} from "@mui/material";

export function HeaderSimple() {
  return (
    <AppBar position="static" color="neutralColor">
      <Toolbar>
        <Typography variant="h6">Motrix</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "flex", md: "flex" } }} />
      </Toolbar>
    </AppBar>
  );
}
