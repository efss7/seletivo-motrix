/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import {
  Box, Button, TextField,
} from '@mui/material';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Motrix } from '../../global/State';
import { FindOne } from '../../services/requests/FindOne';
import { UpdatePost } from '../../services/requests/UpdatePost';
import { ModalError } from '../modal/ModalError';
import { ModalServerError } from '../modal/ModalServerError';
import { ModalSuccess } from '../modal/ModalSuccess';

export function FormEdit(props) {
  const { setPost } = props;
  const { id } = useParams();
  const {
    form,
    onChange,
    setLoading,
  } = useContext(Motrix);

  const makeRequest = async () => {
    const editPost = {
      title: form.title,
      body: form.body,
    };
    await UpdatePost(
      editPost,
      setLoading,
      id,
    );
    const postResult = await FindOne(id);
    const resultData = await postResult.data[0];
    setPost(resultData);
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
          onClick={() => makeRequest()}
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
