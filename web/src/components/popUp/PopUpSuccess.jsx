// import React, { useContext } from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { ContainerPopUp, Content } from './styles';
// import Logo from '../../assets/motrix-logo.jpg';
// import { Motrix } from '../../global/State';

// export function PopUpSuccess() {
//   const navigate = useNavigate();
//   const { clear, setDisplaySuccessPopUp } = useContext(Motrix);
//   const clearAllData = () => {
//     clear();
//     setDisplaySuccessPopUp(false);
//   };
//   const twoFunctions = () => {
//     clearAllData();
//     navigate(-1);
//   };
//   return (
//     <ContainerPopUp>
//       <Content>
//         <img width="300px" src={Logo} alt="logo-motrix" />
//         <Typography color="primary" variant="h6">
//           Post publicado com sucess!! :-)
//         </Typography>
//         <Box padding={5}>
//           <Button
//             variant="contained"
//             color="primary"
//             margin="normal"
//             type="submit"
//             onClick={() => twoFunctions()}
//           >
//             Continuar comprando
//           </Button>
//         </Box>
//       </Content>
//     </ContainerPopUp>
//   );
// }
