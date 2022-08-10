import styled from "styled-components";
import { backgroundDark } from "../../utils/utils";

export const Loading = styled.button`
  @keyframes donut-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  background-color: #fff;
  display: inline-block;
  position: fixed;
  top: 50%;
  left: 50%;
  border: 4px solid ${backgroundDark};
  border-left-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: donut-spin 1.2s linear infinite;
`;
