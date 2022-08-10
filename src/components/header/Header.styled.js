import styled from "styled-components";
import {
  backgroundDark,
  primaryColor,
  secondaryColor,
  textLight,
} from "../../utils/utils";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  padding: 16px 32px;
  background-color: ${backgroundDark};

  @media (max-width: 545px) {
    padding: 16px 8px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;

  & a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    padding-bottom: 1px;
    color: ${textLight};
    position: relative;
    font-size: 1.2rem;

    :hover {
      color: #fff;
    }

    ::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      left: 0;
      bottom: 0;
      opacity: 0;
      transform: translateY(3px);
      background: white;
      transition: opacity 0.2s ease, transform 0.2s ease;
    }

    :hover::after {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  & svg {
    margin-right: 12px;
    color: #fff;
  }

  & h1 {
    font-size: 1.5rem;
    color: #fff;
  }

  & div {
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${primaryColor};
  }

  @media (max-width: 545px) {
    & h1 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 430px) {
    & svg {
      display: none;
    }
  }
`;
