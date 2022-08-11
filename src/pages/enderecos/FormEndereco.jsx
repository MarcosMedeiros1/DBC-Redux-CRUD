import { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import MaskedInput from "react-text-mask";
import { cepMask, OnlyNumbers } from "../../utils/utils";
import { Loading } from "../../components/loading/Loading";
import {
  ErrorMessage,
  FormContainer,
  FormDiv,
  FormItem,
  FormSection,
  TitleDiv,
} from "../../components/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import {
  handleEditEndereco,
  handleRegisterEndereco,
  handleSetEditEndereco,
} from "../../store/actions/EnderecosActions";
import { ButtonPrimary, ButtonSecondary } from "../../components/button/Button";
import { Toast } from "../../components/toast/Toast";
import { apiViaCep } from "../../api";

const AddressSchema = Yup.object().shape({
  cep: Yup.string()
    .transform((value) => OnlyNumbers(value))
    .min(8, "Mínimo 8 caracteres")
    .max(9, "Máximo 8 caracteres")
    .required("Campo obrigatório"),
  tipo: Yup.string().required("Campo obrigatório"),
  logradouro: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  numero: Yup.string()
    .min(1, "Mínimo 1 caractere")
    .max(10, "Máximo 10 caracteres")
    .required("Campo obrigatório"),
  complemento: Yup.string()
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  cidade: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  estado: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  pais: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
});

const FormEndereco = ({ endereco, dispatch, isLoading, isUpdate }) => {
  const navigate = useNavigate();
  const { idPessoa, idEndereco } = useParams();

  useEffect(() => {
    return () => {
      dispatch({
        type: "CLEAN_ENDERECO",
      });
    };
  }, []);

  useEffect(() => {
    if (idEndereco) {
      handleSetEditEndereco(idEndereco, dispatch);
    } else {
      dispatch({ type: "REGISTER_ENDERECO" });
    }
  }, []);

  const getCep = async (event, setFieldValue) => {
    const cep = OnlyNumbers(event.target.value);

    if (cep.length !== 8) {
      Toast.fire({ title: "CEP inválido", icon: "error" });
      return;
    }

    try {
      const { data } = await apiViaCep.get(`/ws/${cep}/json`);
      if (data.erro === "true") {
        Toast.fire({ title: "CEP inválido", icon: "error" });
        return;
      }
      data.logradouro && setFieldValue("logradouro", data.logradouro);
      data.complemento && setFieldValue("complemento", data.complemento);
      data.localidade && setFieldValue("cidade", data.localidade);
      data.uf && setFieldValue("estado", data.uf);
    } catch (error) {
      console.log(error);
      Toast.fire({ title: "CEP inválido", icon: "error" });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <FormContainer>
        <FormSection>
          <TitleDiv>
            <h1>{isUpdate ? "Atualizar endereço" : "Cadastrar endereço"}</h1>
          </TitleDiv>

          <Formik
            initialValues={{
              idPessoa: idPessoa,
              tipo: endereco.tipo || "",
              logradouro: endereco.logradouro || "",
              numero: endereco.numero || "",
              complemento: endereco.complemento || "",
              cep: endereco.cep || "",
              cidade: endereco.cidade || "",
              estado: endereco.estado || "",
              pais: endereco.pais || "",
            }}
            validationSchema={AddressSchema}
            onSubmit={(values, { resetForm }) => {
              values.cep = OnlyNumbers(values.cep);
              isUpdate
                ? handleEditEndereco(values, idEndereco, idPessoa, navigate)
                : handleRegisterEndereco(values, idPessoa, navigate);
              resetForm({ values: "" });
            }}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form>
                <FormDiv>
                  <FormItem>
                    <Field name="cep">
                      {({ field }) => (
                        <MaskedInput
                          {...field}
                          mask={cepMask}
                          placeholder="Digite o cep"
                          type="text"
                          onBlur={(event) => getCep(event, setFieldValue)}
                        />
                      )}
                    </Field>
                    {errors.cep && touched.cep ? (
                      <ErrorMessage>{errors.cep}</ErrorMessage>
                    ) : null}
                  </FormItem>

                  <FormItem>
                    <Field component="select" name="tipo" multiple={false}>
                      <option value="" disabled defaultValue hidden>
                        Selecione o tipo do endereço
                      </option>
                      <option value="RESIDENCIAL">Residencial</option>
                      <option value="COMERCIAL">Comercial</option>
                    </Field>
                    {errors.tipo && touched.tipo ? (
                      <ErrorMessage>{errors.tipo}</ErrorMessage>
                    ) : null}
                  </FormItem>

                  <FormItem>
                    <Field name="logradouro" placeholder="Logradouro" />
                    {errors.logradouro && touched.logradouro ? (
                      <ErrorMessage>{errors.logradouro}</ErrorMessage>
                    ) : null}
                  </FormItem>

                  <FormItem>
                    <Field name="numero" placeholder="Número" />
                    {errors.numero && touched.numero ? (
                      <ErrorMessage>{errors.numero}</ErrorMessage>
                    ) : null}
                  </FormItem>

                  <FormItem>
                    <Field name="complemento" placeholder="Complemento" />
                    {errors.complemento && touched.complemento ? (
                      <ErrorMessage>{errors.complemento}</ErrorMessage>
                    ) : null}
                  </FormItem>

                  <FormItem>
                    <Field name="cidade" placeholder="Cidade" />
                    {errors.cidade && touched.cidade ? (
                      <ErrorMessage>{errors.cidade}</ErrorMessage>
                    ) : null}
                  </FormItem>

                  <FormItem>
                    <Field name="estado" placeholder="Estado" />
                    {errors.estado && touched.estado ? (
                      <ErrorMessage>{errors.estado}</ErrorMessage>
                    ) : null}
                  </FormItem>

                  <FormItem>
                    <Field name="pais" placeholder="País" />
                    {errors.pais && touched.pais ? (
                      <ErrorMessage>{errors.pais}</ErrorMessage>
                    ) : null}
                  </FormItem>

                  <FormItem>
                    <div>
                      <ButtonSecondary
                        type="button"
                        padding={"12px 32px"}
                        onClick={() => navigate(`/enderecos/${idPessoa}`)}
                      >
                        Cancelar
                      </ButtonSecondary>

                      <ButtonPrimary padding={"16px 32px"} type="submit">
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
    </>
  );
};

const mapStateToProps = (state) => ({
  endereco: state.enderecosReducer.endereco,
  isLoading: state.enderecosReducer.isLoading,
  isUpdate: state.enderecosReducer.isUpdate,
});

export default connect(mapStateToProps)(FormEndereco);
