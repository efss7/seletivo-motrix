import { ArrowBack } from "@mui/icons-material";
import {
  AppBar, Box, IconButton, Toolbar, Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderGoBack() {
  const navigate = useNavigate();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          size="large"
          aria-label="show more"
          aria-haspopup="true"
          onClick={() => navigate(-1)}
          color="inherit"
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h6">Motrix</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "flex", md: "flex" } }} />
      </Toolbar>
    </AppBar>
  );
}
