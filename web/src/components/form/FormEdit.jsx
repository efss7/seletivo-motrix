/* eslint-disable no-unused-expressions */
import {
  Box, Button, TextField,
} from '@mui/material';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Motrix } from '../../global/State';
import { UpdatePost } from '../../services/requests/UpdatePost';
import { ModalError } from '../modal/ModalError';
import { ModalServerError } from '../modal/ModalServerError';
import { ModalSuccess } from '../modal/ModalSuccess';

export function FormEdit() {
  const { id } = useParams();
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
    UpdatePost(
      newPost,
      setLoading,
      handleModalSuccess,
      setModalServerError,
      setServerMessageError,
      id,
    );
  };

  const checkRequest = () => {
    const isOk = form.title && form.body;
    isOk ? makeRequest() : handleModalError();
  };
  return (

    <>
      <Box sx={{ margin: 2, maxWidth: "600px" }}>
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
          Editar
        </Button>
      </Box>
      <ModalSuccess />
      <ModalError />
      <ModalServerError />
    </>

  );
}
