import styled from "styled-components";
import { backgroundLight } from "../../utils/utils";

export const BackgroundModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.div`
  background-color: ${backgroundLight};
  color: #000;
  padding: 24px;
  border-radius: 4px;
`;

export const TextModal = styled.div`
  margin-bottom: 16px;

  & h2 {
    color: #000;
  }
`;

export const ButtonsModal = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;
