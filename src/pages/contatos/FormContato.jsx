import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  ErrorMessage,
  FormContainer,
  FormDiv,
  FormItem,
  FormSection,
  TitleDiv,
} from "../../components/form/Form";
import { Loading } from "../../components/loading/Loading";
import {
  handleEditContato,
  handleRegisterContato,
  handleSetEditContato,
} from "../../store/actions/ContatosActions";
import { OnlyNumbers, telefoneMask } from "../../utils/utils";
import MaskedInput from "react-text-mask";
import { ButtonPrimary, ButtonSecondary } from "../../components/button/Button";

const ContactSchema = Yup.object().shape({
  telefone: Yup.string()
    .transform((value) => OnlyNumbers(value))
    .min(10, "Mínimo 10 números")
    .max(11, "Máximo 11 números")
    .required("Campo obrigatório"),
  tipoContato: Yup.string().required("Campo obrigatório"),
  descricao: Yup.string()
    .max(20, "Máximo 20 caracteres")
    .required("Campo obrigatório"),
});

const FormContato = ({ contato, isLoading, isUpdate, dispatch }) => {
  const navigate = useNavigate();
  const { idPessoa, idContato } = useParams();

  useEffect(() => {
    return () => {
      dispatch({
        type: "CLEAN_CONTATO",
      });
    };
  }, []);

  useEffect(() => {
    if (idContato) {
      handleSetEditContato(idPessoa, idContato, dispatch);
    } else {
      dispatch({ type: "REGISTER_CONTATO" });
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FormContainer>
      <FormSection>
        <TitleDiv>
          <h1>{isUpdate ? "Atualizar contato" : "Cadastrar contato"}</h1>
        </TitleDiv>
        <Formik
          initialValues={{
            idPessoa: idPessoa,
            tipoContato: contato.tipoContato || "",
            telefone: contato.telefone || "",
            descricao: contato.descricao || "",
          }}
          validationSchema={ContactSchema}
          onSubmit={(values, { resetForm }) => {
            values.telefone = OnlyNumbers(values.telefone);
            isUpdate
              ? handleEditContato(values, idContato, idPessoa, navigate)
              : handleRegisterContato(values, idPessoa, navigate);
            resetForm({ values: "" });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <FormDiv>
                <FormItem>
                  <Field name="telefone">
                    {({ field }) => (
                      <MaskedInput
                        {...field}
                        mask={telefoneMask}
                        placeholder="Telefone"
                        type="text"
                      />
                    )}
                  </Field>
                  {errors.telefone && touched.telefone ? (
                    <ErrorMessage>{errors.telefone}</ErrorMessage>
                  ) : null}
                </FormItem>

                <FormItem>
                  <Field name="descricao" placeholder="Descrição"></Field>
                  {errors.descricao && touched.descricao ? (
                    <ErrorMessage>{errors.descricao}</ErrorMessage>
                  ) : null}
                </FormItem>

                <FormItem>
                  <Field component="select" name="tipoContato" multiple={false}>
                    <option value="" defaultValue hidden>
                      Selecione o tipo do contato
                    </option>
                    <option value="RESIDENCIAL">Residencial</option>
                    <option value="COMERCIAL">Comercial</option>
                  </Field>
                  {errors.tipoContato && touched.tipoContato ? (
                    <ErrorMessage>{errors.tipoContato}</ErrorMessage>
                  ) : null}
                </FormItem>

                <FormItem>
                  <div>
                    <ButtonSecondary
                      type="button"
                      padding={"12px 32px"}
                      onClick={() => navigate(`/contatos/${idPessoa}`)}
                    >
                      Cancelar
                    </ButtonSecondary>

                    <ButtonPrimary type="submit" padding={"16px 32px"}>
                      {isUpdate ? "Atualizar" : "Cadastrar"}
                    </ButtonPrimary>
                  </div>
                </FormItem>
              </FormDiv>
            </Form>
          )}
        </Formik>
      </FormSection>
    </FormContainer>
  );
};

const mapStateToProps = (state) => ({
  contato: state.contatosReducer.contato,
  isLoading: state.contatosReducer.isLoading,
  isUpdate: state.contatosReducer.isUpdate,
});

export default connect(mapStateToProps)(FormContato);
