import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../utils/utils";

export const DefaultButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${secondaryColor};
  color: ${primaryColor};
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${(props) => props.hoverColor};
    box-shadow: none;
  }
`;

export const ButtonPrimary = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${primaryColor};
  color: ${secondaryColor};
  font-size: ${(props) => props.fontSize};
  border: 1px solid ${primaryColor};
  border-radius: 8px;
  padding: ${(props) => props.padding};
  cursor: pointer;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  transition: 0.2s;

  :hover {
    background-color: ${secondaryColor};
    color: ${primaryColor};
    box-shadow: none;
  }
`;

export const ButtonSecondary = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${secondaryColor};
  color: ${primaryColor};
  font-size: ${(props) => props.fontSize};
  border: 1px solid ${primaryColor};
  border-radius: 8px;
  padding: ${(props) => props.padding};
  cursor: pointer;
  box-shadow: none;
  transition: 0.2s;

  :hover {
    background-color: ${primaryColor};
    color: ${secondaryColor};
    box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  }
`;
