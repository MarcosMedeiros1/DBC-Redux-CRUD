import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { handleLogin } from "../../store/actions/AuthActions";
import { Link, useNavigate } from "react-router-dom";
import {
  ErrorMessage,
  FormContainer,
  FormDiv,
  FormItem,
  FormSection,
  SubTitle,
  TitleDiv,
} from "../../components/form/Form";
import { ButtonPrimary } from "../../components/button/Button";

const SigninSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(20, "Máximo 20 caracteres")
    .required("Campo obrigatório"),
  senha: Yup.string()
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
});

const Login = ({ handleLogin, dispatch }) => {
  const navigate = useNavigate();

  return (
    <FormContainer>
      <FormSection>
        <TitleDiv>
          <h1>Realizar login</h1>
          <SubTitle>Informe seu login e senha abaixo</SubTitle>
        </TitleDiv>
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
              <FormDiv>
                <FormItem>
                  <label htmlFor="login">LOGIN</label>
                  <Field name="login" placeholder="Login" />
                  {errors.login && touched.login ? (
                    <ErrorMessage>{errors.login}</ErrorMessage>
                  ) : null}
                </FormItem>

                <FormItem>
                  <label htmlFor="senha">SENHA</label>
                  <Field type="password" name="senha" placeholder="Senha" />
                  {errors.senha && touched.senha ? (
                    <ErrorMessage>{errors.senha}</ErrorMessage>
                  ) : null}
                </FormItem>

                <ButtonPrimary padding={"16px 32px"} type="submit">
                  Entrar
                </ButtonPrimary>

                <span>
                  Não possui uma conta?{" "}
                  <Link to={"/cadastrar-usuario"}>Cadastrar</Link>
                </span>
              </FormDiv>
            </Form>
          )}
        </Formik>
      </FormSection>
    </FormContainer>
  );
};

const mapDispatchToProps = () => ({
  handleLogin: (values, dispatch, navigate) =>
    handleLogin(values, dispatch, navigate),
});

export default connect(mapDispatchToProps)(Login);
