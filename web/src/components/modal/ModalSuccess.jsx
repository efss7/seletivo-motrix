import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Motrix } from '../../global/State';

import { ModalContainer, Content } from "./styles";

export function ModalSuccess() {
  const navigate = useNavigate();
  const {
    clear, handleModalSuccess, modalSuccess,
  } = useContext(Motrix);

  const clearAllData = () => {
    clear();
    handleModalSuccess();
  };

  const twoFunctions = () => {
    clearAllData();
    navigate(-1);
  };

  return (
    <Modal
      hideBackdrop
      open={modalSuccess}
      onClose={handleModalSuccess}
    >
      <ModalContainer>
        <Content>
          <Typography variant="h6" color="green" margin={0}>
            Post publicado com sucesso!! :)
          </Typography>
          <Button fullWidth variant="contained" color="accentColor" onClick={() => twoFunctions()}>Voltar</Button>
        </Content>
      </ModalContainer>
    </Modal>
  );
}
