import styled from "styled-components";
import { backgroundDark, backgroundLight, textLight } from "../../utils/utils";

export const ContainerList = styled.section`
  display: grid;
  justify-content: center;
  align-content: start;
  gap: 32px;
  padding: 32px;
  height: 100%;
  background-color: ${backgroundDark};

  & h2 {
    color: #fff;
    text-align: center;
  }

  @media (max-width: 430px) {
    padding: 16px 0;
  }
`;

export const List = styled.div`
  display: grid;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #dfe0eb;

  @media (max-width: 430px) {
    width: 100vw;
  }
`;

export const ListHeader = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(5, 1fr);
  color: ${textLight};
  padding: 16px 24px;
  border-bottom: 1px solid #dfe0eb;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ListAdd = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: grid;
  align-items: center;
  gap: 24px;
  grid-template-columns: ${(props) => props.columns};
  padding: 24px;
  border-top: 1px solid #dfe0eb;
  list-style: none;

  & strong {
    display: none;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    width: 100vw;

    & strong {
      display: inline;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  :hover {
    background-color: ${backgroundLight};
  }

  :first-child {
    border-radius: 8px 8px 0 0;
    border-top: none;
  }

  :last-child {
    border-radius: 0 0 8px 8px;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export const InfoPerson = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Info = styled.span`
  & strong {
    display: inline;
  }
`;
