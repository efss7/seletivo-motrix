import { Box, Button, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/motrix-logo.jpg";
import { Motrix } from '../global/State';

export function FormCreate() {
  const navigate = useNavigate();
  const { form, onChange } = useContext(Motrix);
  return (
    <>

      <Box align="center" borderRadius={8} sx={{ margin: 8 }}>
        <img src={Logo} alt="logoMotrix" />

        <TextField
          name="title"
          value={form.title}
          onChange={onChange}
          label="Título"
          variant="outlined"
          fullWidth
          placeholder="Digite aqui o título do seu post..."
          margin="normal"
          required
          type="name"
        />
        <TextField
          name="body"
          value={form.body}
          onChange={onChange}
          label="Corpo"
          variant="outlined"
          fullWidth
          multiline
          placeholder="Digite aqui o corpo do seu post..."
          margin="normal"
          required
          type="name"
        />
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          margin="normal"
          type="submit"
          onClick={() => navigate("/")}
        >
          Postar
        </Button>
      </Box>
    </>
  );
}
