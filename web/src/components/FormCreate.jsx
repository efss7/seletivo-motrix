/* eslint-disable no-unused-expressions */
import {
  Box, Button, TextField,
} from '@mui/material';
import React, { useContext } from 'react';
import Logo from "../assets/motrix-logo.jpg";
import { Motrix } from '../global/State';
import { CreatePost } from '../services/requests/CreatePost';
import { ModalError } from './modal/ModalError';
import { ModalSuccess } from './modal/ModalSuccess';
import { ModalServerError } from './modal/ModalServerError';

export function FormCreate() {
  const {
    form,
    onChange,
    setLoading,
    handleModalSuccess,
    handleModalError,
    setModalServerError,
    setServerMessageError,
  } = useContext(Motrix);

  const makeRequest = () => {
    const newPost = {
      title: form.title,
      body: form.body,
    };
    CreatePost(
      newPost,
      setLoading,
      handleModalSuccess,
      setModalServerError,
      setServerMessageError,
    );
  };

  const checkRequest = () => {
    const isOk = form.title && form.body;
    isOk ? makeRequest() : handleModalError();
  };
  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="center" gap="1rem" mx="auto" sx={{ maxWidth: "20rem", height: "calc(100vh - 4rem)" }}>
        <Box sx={{ textAlign: "center", margin: 0 }}>
          <img src={Logo} alt="logoMotrix" />
        </Box>

        <TextField
          sx={{ bgcolor: "#ffffff", borderRadius: "5px" }}
          name="title"
          value={form.title}
          onChange={onChange}
          label="Título"
          variant="outlined"
          color="accentColor"
          fullWidth
          placeholder="Digite aqui o título do seu post..."
          required
          type="name"
        />
        <TextField
          sx={{ bgcolor: "#ffffff", borderRadius: "5px" }}
          name="body"
          value={form.body}
          onChange={onChange}
          label="Corpo"
          variant="outlined"
          color="accentColor"
          fullWidth
          multiline
          placeholder="Digite aqui o corpo do seu post..."
          required
          type="text"
        />
        <Button
          fullWidth
          variant="contained"
          color="accentColor"
          type="submit"
          onClick={() => checkRequest()}
        >
          Postar
        </Button>
        <ModalSuccess />
        <ModalError />
        <ModalServerError />
      </Box>
    </>
  );
}
