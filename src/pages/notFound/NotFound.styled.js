import styled from "styled-components";

export const StyledNotFound = styled.div`
  display: grid;
  gap: 16px;
  justify-items: center;
  align-content: center;
  height: 100vh;
  color: #fff;

  & a{
    color: #fff;
    text-decoration: none;
    position: relative;
    font-size: 2rem;

  ::after{
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    left: 0;
    bottom: 0;
    opacity: 0;
    transform: translateY(3px);
    background: #fff;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  :hover::after{
    opacity: 1;
    transform: translateY(0);
  }
}
`