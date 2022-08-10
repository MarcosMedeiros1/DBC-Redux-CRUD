import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { handleLogin, handleLogout } from "../../store/actions/AuthActions";
import { useNavigate } from "react-router-dom";

const SigninSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(20, "Máximo 20 caracteres")
    .required("Required"),
  senha: Yup.string()
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Required"),
});

const Login = ({ handleLogin, handleLogout, dispatch }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          login: "",
          senha: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          handleLogin(values, dispatch, navigate);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="login" />
            {errors.login && touched.login ? <div>{errors.login}</div> : null}

            <Field name="senha" />
            {errors.senha && touched.senha ? <div>{errors.senha}</div> : null}

            <button type="submit">Entrar</button>
            <button
              type="button"
              onClick={() => handleLogout(dispatch, navigate)}
            >
              Sair
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = () => ({
  handleLogin: (values, dispatch, navigate) =>
    handleLogin(values, dispatch, navigate),

  handleLogout: (dispatch, navigate) => handleLogout(dispatch, navigate),
});

export default connect(mapDispatchToProps)(Login);
