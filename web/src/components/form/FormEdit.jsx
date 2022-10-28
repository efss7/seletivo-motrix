import {
  Box, Button, TextField,
} from '@mui/material';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Motrix } from '../../global/State';
import { FindOne } from '../../services/requests/FindOne';
import { UpdatePost } from '../../services/requests/UpdatePost';
import { ModalError } from '../modal/ModalError';
import { ModalSuccess } from '../modal/ModalSuccess';

export function FormEdit(props) {
  const { setPost } = props;
  const { id } = useParams();
  const {
    form,
    clear,
    onChange,
    setLoading,
  } = useContext(Motrix);

  const makeRequest = async () => {
    const editPost = {
      title: form.title,
      body: form.body,
    };
    clear();
    await UpdatePost(
      editPost,
      setLoading,
      id,
    );
    await FindOne(setPost, setLoading, id);
  };

  return (

    <>
      <Box sx={{
        display: "flex", flexDirection: "column", margin: 2, minWidth: 350, gap: 2,
      }}
      >
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
    </>

  );
}
