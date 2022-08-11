import { apiDbc } from "../../api";
import { Toast } from "../../components/toast/Toast";

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
    Toast.fire({ title: "Nao foi possível encontrar pessoas", icon: "error" });
  }
};

export const handleRegisterPessoa = async (values) => {
  try {
    await apiDbc.post("/pessoa", values);
    Toast.fire({
      title: "Pessoa cadastrada com sucesso",
      icon: "success",
    });
    // Por algum motivo o navigate("/") não funcionou aqui
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    console.log(error);
    Toast.fire({ title: "Dados incorretos", icon: "error" });
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
    Toast.fire({ title: "Não foi possível encontrar a pessoa", icon: "error" });
  }
};

export const handleEditPessoa = async (values, idPessoa, navigate) => {
  try {
    await apiDbc.put(`/pessoa/${idPessoa}`, values);
    Toast.fire({ title: "Pessoa editada com sucesso", icon: "success" });
    navigate("/");
  } catch (error) {
    console.log(error);
    Toast.fire({ title: "Dados incorretos", icon: "error" });
  }
};

export const handleDeletePessoa = async (idPessoa, dispatch) => {
  try {
    await apiDbc.delete(`/pessoa/${idPessoa}`);
    Toast.fire({ title: "Pessoa deletada com sucesso", icon: "success" });
    getPessoas(dispatch);
  } catch (error) {
    console.log(error);
    Toast.fire({ title: "Não foi possível deletar a pessoa", icon: "error" });
  }
};
