import {
  AppBar, Toolbar, Typography,
} from "@mui/material";

export function HeaderSimple() {
  return (
    <AppBar position="static" color="primary" sx={{ boxShadow: 0 }}>
      <Toolbar>
        <Typography variant="h6">Motrix</Typography>
      </Toolbar>
    </AppBar>
  );
}
