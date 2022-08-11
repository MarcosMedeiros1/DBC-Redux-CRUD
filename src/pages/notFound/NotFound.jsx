import { Link } from "react-router-dom";
import { StyledNotFound } from "./NotFound.styled";
import { connect } from "react-redux";

const NotFound = ({ auth }) => {
  return auth ? (
    (window.location.href = "/")
  ) : (
    <StyledNotFound>
      <h1>No easter eggs here.</h1>
      <Link to="/login">Fazer login</Link>
    </StyledNotFound>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(NotFound);
