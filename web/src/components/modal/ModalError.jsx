import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { Motrix } from '../../global/State';

import { Content, ModalContainer } from "./styles";

export function ModalError() {
  const {
    handleModalError, modalError,
  } = useContext(Motrix);

  const tryAgain = () => {
    handleModalError();
  };

  return (
    <Modal
      hideBackdrop
      open={modalError}
      onClose={handleModalError}
    >
      <ModalContainer>
        <Content>
          <Typography variant="h6" color="red" margin={0}>
            Infelizmente algo deu errado! :(
          </Typography>
          <Typography variant="subtitle1" margin={0}>
            Verifique se você inseriu todos os dados solicitados corretamente
          </Typography>
          <Button fullWidth variant="contained" color="accentColor" onClick={() => tryAgain()}>Tentar novamente</Button>
        </Content>
      </ModalContainer>
    </Modal>
  );
}
