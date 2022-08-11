import { apiDbc } from "../../api";

export const getPessoas = async (dispatch) => {
  try {
    const { data } = await apiDbc.get("/pessoa");
    const pessoas = {
      type: "SET_PESSOA",
      pessoas: data.content,
    };
    dispatch(pessoas);
  } catch (error) {
    console.log(error);
  }
};

export const handleRegisterPessoa = async (values, navigate) => {
  try {
    await apiDbc.post("/pessoa", values);
    navigatePessoas(navigate);
  } catch (error) {
    console.log(error);
  }
};

export const handleSetEditPessoa = async (idPessoa, dispatch) => {
  try {
    const { data } = await apiDbc.get(
      `/pessoa/lista-completa?idPessoa=${idPessoa}`,
    );
    const editarPessoa = {
      type: "SET_PESSOA_BY_ID",
      pessoa: data && data[0],
    };
    dispatch(editarPessoa);
  } catch (error) {
    console.log(error);
  }
};

export const handleEditPessoa = async (values, idPessoa, navigate) => {
  try {
    await apiDbc.put(`/pessoa/${idPessoa}`, values);
    navigatePessoas(navigate);
  } catch (error) {
    console.log(error);
  }
};

export const handleDeletePessoa = async (idPessoa, dispatch) => {
  try {
    await apiDbc.delete(`/pessoa/${idPessoa}`);
    getPessoas(dispatch);
  } catch (error) {
    console.log(error);
  }
};

const navigatePessoas = (navigate) => {
  navigate("/");
};
