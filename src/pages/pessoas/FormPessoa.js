import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import MaskedInput from "react-text-mask";
import {
  ErrorMessage,
  FormContainer,
  FormDiv,
  FormItem,
  FormSection,
  TitleDiv,
} from "../../components/form/Form";
import {
  cpfMask,
  dateMask,
  FormatDateBrToUsa,
  FormatDateUsaToBr,
  OnlyNumbers,
} from "../../utils/utils";
import { ButtonPrimary, ButtonSecondary } from "../../components/button/Button";
import {
  handleEditPessoa,
  handleRegisterPessoa,
  handleSetEditPessoa,
} from "../../store/actions/PessoasActions";
import { Loading } from "../../components/loading/Loading";

const FormSchema = Yup.object().shape({
  nome: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  dataNascimento: Yup.string()
    .transform((value) => OnlyNumbers(value))
    .min(8, "Mínimo 8 caracteres")
    .max(10, "Máximo 8 caracteres")
    .required("Campo obrigatório")
    .required("Campo obrigatório"),
  cpf: Yup.string()
    .transform((value) => OnlyNumbers(value))
    .min(11, "Mínimo 11 caracteres")
    .max(111, "Máximo 11 caracteres")
    .required("Campo obrigatório")
    .required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
});

const FormPessoa = ({ pessoa, dispatch, isLoading, isUpdate }) => {
  const { idPessoa } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch({
        type: "CLEAN_PEOPLE",
      });
    };
  }, []);

  useEffect(() => {
    if (idPessoa) {
      handleSetEditPessoa(idPessoa, dispatch);
    } else {
      dispatch({ type: "REGISTER_PESSOA" });
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FormContainer>
      <FormSection>
        <TitleDiv>
          <h1>{isUpdate ? "Atualizar pessoa" : "Cadastrar pessoa"}</h1>
        </TitleDiv>

        <Formik
          initialValues={{
            nome: pessoa.nome || "",
            dataNascimento: FormatDateUsaToBr(pessoa.dataNascimento) || "",
            cpf: pessoa.cpf || "",
            email: pessoa.email || "",
          }}
          validationSchema={FormSchema}
          onSubmit={(values, { resetForm }) => {
            values.dataNascimento = FormatDateBrToUsa(values.dataNascimento);
            values.cpf = OnlyNumbers(values.cpf);

            if (moment(values.dataNascimento).isValid()) {
              isUpdate
                ? handleEditPessoa(values, idPessoa, navigate)
                : handleRegisterPessoa(values, dispatch, navigate);
            } else {
              toast.error("Insira uma data válida");
            }
            resetForm({ values: "" });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <FormDiv>
                <FormItem>
                  <Field name="nome" placeholder="Nome" />
                  {errors.nome && touched.nome ? (
                    <ErrorMessage>{errors.nome}</ErrorMessage>
                  ) : null}
                </FormItem>

                <FormItem>
                  <Field name="dataNascimento">
                    {({ field }) => (
                      <MaskedInput
                        {...field}
                        mask={dateMask}
                        placeholder="Data de nascimento"
                        type="text"
                      />
                    )}
                  </Field>
                  {errors.dataNascimento && touched.dataNascimento ? (
                    <ErrorMessage>{errors.dataNascimento}</ErrorMessage>
                  ) : null}
                </FormItem>

                <FormItem>
                  <Field name="cpf">
                    {({ field }) => (
                      <MaskedInput
                        {...field}
                        mask={cpfMask}
                        placeholder="CPF"
                        type="text"
                      />
                    )}
                  </Field>
                  {errors.cpf && touched.cpf ? (
                    <ErrorMessage>{errors.cpf}</ErrorMessage>
                  ) : null}
                </FormItem>

                <FormItem>
                  <Field name="email" placeholder="Email" type="email" />
                  {errors.email && touched.email ? (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                  ) : null}
                </FormItem>

                <FormItem>
                  <div>
                    <ButtonSecondary
                      type="button"
                      padding={"12px 32px"}
                      disabled={false}
                      onClick={() => navigate("/")}
                    >
                      Cancelar
                    </ButtonSecondary>

                    <ButtonPrimary
                      type="submit"
                      padding={"12px 32px"}
                      disabled={false}
                    >
                      {isUpdate ? "Atualizar" : "Cadastrar"}
                    </ButtonPrimary>
                  </div>
                </FormItem>
              </FormDiv>
            </Form>
          )}
        </Formik>
      </FormSection>
      <Toaster />
    </FormContainer>
  );
};

const mapStateToProps = (state) => ({
  pessoa: state.pessoasReducer.pessoa,
  isLoading: state.pessoasReducer.isLoading,
  isUpdate: state.pessoasReducer.isUpdate,
});

export default connect(mapStateToProps)(FormPessoa);
