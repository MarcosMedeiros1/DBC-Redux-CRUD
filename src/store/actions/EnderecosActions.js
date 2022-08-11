import { apiDbc } from "../../api";
import { Toast } from "../../components/toast/Toast";

export const getEnderecos = async (idPessoa, dispatch) => {
  try {
    const { data } = await apiDbc.get(
      `/endereco/retorna-por-id-pessoa?idPessoa=${idPessoa}`,
    );
    const enderecos = { type: "SET_ENDERECOS", enderecos: data };
    dispatch(enderecos);
  } catch (error) {
    console.log(error);
    Toast.fire({
      title: "Não foi possível encontrar endereços",
      icon: "error",
    });
  }
};

export const handleRegisterEndereco = async (values, idPessoa, navigate) => {
  try {
    await apiDbc.post(`/endereco/{idPessoa}?idPessoa=${idPessoa}`, values);
    Toast.fire({ title: "Endereço cadastrado com sucesso", icon: "success" });
    navigateEnderecos(idPessoa, navigate);
  } catch (error) {
    console.log(error);
    Toast.fire({ title: "Dados incorretos", icon: "error" });
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
    Toast.fire({
      title: "Não foi possível encontrar o endereço",
      icon: "error",
    });
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
    Toast.fire({ title: "Endereço editado com sucesso", icon: "success" });
    navigateEnderecos(idPessoa, navigate);
  } catch (error) {
    console.log(error);
    Toast.fire({ title: "Dados incorretos", icon: "error" });
  }
};

export const handleDeleteEndereco = async (idEndereco, idPessoa, dispatch) => {
  try {
    await apiDbc.delete(`/endereco/${idEndereco}`);
    Toast.fire({ title: "Endereço deletado com sucesso", icon: "success" });
    getEnderecos(idPessoa, dispatch);
  } catch (error) {
    console.log(error);
    Toast.fire({ title: "Não foi possível deletar o endereço", icon: "error" });
  }
};

const navigateEnderecos = (idPessoa, navigate) => {
  navigate(`/enderecos/${idPessoa}`);
};
