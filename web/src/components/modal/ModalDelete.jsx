import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DeletePost } from '../../services/requests/DeletePost';

import { Content, ModalContainer } from "./styles";

export function ModalDelete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalDelete, setModalDelete] = useState(false);

  function handleModalDelete() {
    setModalDelete(!modalDelete);
  }

  async function deletePost() {
    await DeletePost(id);
    navigate("/");
  }

  return (
    <Modal
      hideBackdrop
      open={modalDelete}
      onClose={handleModalDelete()}
    >
      <ModalContainer>
        <Content>
          <Typography variant="h6" color="red" margin={0}>
            Infelizmente algo deu errado! :(
          </Typography>
          <Typography variant="subtitle1" margin={0}>
            Verifique se você inseriu todos os dados solicitados corretamente
          </Typography>
          <Button fullWidth variant="contained" color="accentColor" onClick={() => deletePost()}>Tentar novamente</Button>
        </Content>
      </ModalContainer>
    </Modal>
  );
}
