import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100vw;
  height: 128vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
  align-items: center;
  padding: 4%;
  height: auto;
  gap: 2rem;
  border-radius: 8px;
`;
