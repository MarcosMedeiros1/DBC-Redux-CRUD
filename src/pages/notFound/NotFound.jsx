import { StyledNotFound } from "./NotFound.styled";

const NotFound = ({}) => {
  return localStorage.getItem("token") ? (
    (window.location.href = "/pessoas")
  ) : (
    <>
      <StyledNotFound>
        <h1>Página não encontrada</h1>
      </StyledNotFound>
      {(window.location.href = "/")}
    </>
  );
};

export default NotFound;
