import { Link } from "react-router-dom";
import { StyledNotFound } from "./NotFound.styled";
import { connect } from "react-redux";

const NotFound = ({ isLogged }) => {
  return isLogged ? (
    (window.location.href = "/")
  ) : (
    <StyledNotFound>
      <h1>Página não encontrada</h1>
      <Link to="/login">Fazer login</Link>
    </StyledNotFound>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.authReducer.isLogged,
});

export default connect(mapStateToProps)(NotFound);
