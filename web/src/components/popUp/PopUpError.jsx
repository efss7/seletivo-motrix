// import { Box, Button, Typography } from '@mui/material';
// import React, { useContext } from 'react';
// import Logo from '../../assets/motrix-logo.jpg';
// import { Motrix } from '../../global/State';
// import { ContainerPopUp, Content } from '../modal/styles';

// export function PopUpError() {
//   const { setDisplayErrorPopUp } = useContext(Motrix);
//   const twoFunctions = () => {
//     setDisplayErrorPopUp(false);
//   };
//   return (
//     <ContainerPopUp>
//       <Content>
//         <img width="300px" src={Logo} alt="logo-motrix" />
//         <Typography color="error" variant="h6">
//           Infelizmente algo deu errado na compra... :-(
//         </Typography>
//         <Typography>
//           Verifique se o seu

//           <b>carrinho</b>

//           não está vazio
//         </Typography>
//         <Typography padding={0}>
//           ou se passou as informações corretas
//         </Typography>
//         <Box padding={5}>
//           <Button
//             variant="contained"
//             color="primary"
//             margin="normal"
//             type="submit"
//             onClick={() => twoFunctions()}
//           >
//             Tentar novamente
//           </Button>
//         </Box>
//       </Content>
//     </ContainerPopUp>
//   );
// }
