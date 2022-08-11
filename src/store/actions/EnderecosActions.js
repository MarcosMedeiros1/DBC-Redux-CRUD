import { apiDbc } from "../../api";

export const getEnderecos = async (idPessoa, dispatch) => {
  try {
    const { data } = await apiDbc.get(
      `/endereco/retorna-por-id-pessoa?idPessoa=${idPessoa}`,
    );
    const enderecos = { type: "SET_ENDERECOS", enderecos: data };
    dispatch(enderecos);
  } catch (error) {
    console.log(error);
  }
};

export const handleRegisterEndereco = async (values, idPessoa, navigate) => {
  try {
    await apiDbc.post(`/endereco/{idPessoa}?idPessoa=${idPessoa}`, values);
    navigateEnderecos(idPessoa, navigate);
  } catch (error) {
    console.log(error);
  }
};

export const handleSetEditEndereco = async (idEndereco, dispatch) => {
  try {
    const { data } = await apiDbc.get(`/endereco/${idEndereco}`);
    const editarEndereco = {
      type: "SET_ENDERECO_BY_ID",
      endereco: data,
    };
    dispatch(editarEndereco);
  } catch (error) {
    console.log(error);
  }
};

export const handleEditEndereco = async (
  values,
  idEndereco,
  idPessoa,
  navigate,
) => {
  try {
    await apiDbc.put(`/endereco/${idEndereco}`, values);
    navigateEnderecos(idPessoa, navigate);
  } catch (error) {
    console.log(error);
  }
};

export const handleDeleteEndereco = async (idEndereco, idPessoa, dispatch) => {
  try {
    await apiDbc.delete(`/endereco/${idEndereco}`);
    getEnderecos(idPessoa, dispatch);
  } catch (error) {
    console.log(error);
  }
};

const navigateEnderecos = (idPessoa, navigate) => {
  navigate(`/enderecos/${idPessoa}`);
};
