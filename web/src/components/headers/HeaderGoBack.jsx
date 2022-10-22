import { ArrowBack } from "@mui/icons-material";
import {
  AppBar, IconButton, Toolbar, Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export function HeaderGoBack() {
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
      </Toolbar>
    </AppBar>
  );
}
