import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { Motrix } from '../../global/State';
import { Content, ModalContainer } from "./styles";

export function ModalServerError() {
  const {
    handleModalServerError, modalServerError, serverMessageError,
  } = useContext(Motrix);

  const tryAgain = () => {
    handleModalServerError();
  };

  return (
    <Modal
      hideBackdrop
      open={modalServerError}
      onClose={handleModalServerError}
    >
      <ModalContainer>
        <Content>
          <Typography variant="h6" color="red" margin={0}>
            Infelizmente ocorreu um erro no servidor! :(
          </Typography>
          <Typography variant="subtitle1" margin={0}>
            Por favor, tente novamente mais tarde...
          </Typography>
          <Typography variant="subtitle1" margin={0}>
            {serverMessageError}
          </Typography>
          <Button fullWidth variant="contained" color="accentColor" onClick={() => tryAgain()}>Tentar novamente</Button>
        </Content>
      </ModalContainer>
    </Modal>
  );
}
