import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ButtonPrimary } from "../../components/button/Button";
import {
  FormContainer,
  FormSection,
  TitleDiv,
  SubTitle,
  FormDiv,
  FormItem,
  ErrorMessage,
} from "../../components/form/Form";
import { handleRegisterUser } from "../../store/actions/AuthActions";

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  senha: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
});

const Users = ({ handleRegisterUser }) => {
  const navigate = useNavigate();

  return (
    <>
      <FormContainer>
        <FormSection>
          <TitleDiv>
            <h1>Cadastrar usuario</h1>
            <SubTitle>Informe o login e senha para cadastro</SubTitle>
          </TitleDiv>
          <Formik
            initialValues={{
              login: "",
              senha: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              handleRegisterUser(values, navigate);
              resetForm({ value: "" });
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
                    Cadastrar
                  </ButtonPrimary>
                  <span>
                    Já possui uma conta? <Link to={"/"}>Fazer Login</Link>
                  </span>
                </FormDiv>
              </Form>
            )}
          </Formik>
        </FormSection>
      </FormContainer>
    </>
  );
};

const mapDispatchToProps = () => ({
  handleRegisterUser: (values, navigate) =>
    handleRegisterUser(values, navigate),
});

export default connect(mapDispatchToProps)(Users);
