import { apiDbc } from "../../api";
import { Toast } from "../../components/toast/Toast";

export const getContatos = async (idPessoa, dispatch) => {
  try {
    const { data } = await apiDbc.get(`/contato/${idPessoa}`);
    const contatos = { type: "SET_CONTATOS", contatos: data };
    dispatch(contatos);
  } catch (error) {
    console.log(error);
    Toast.fire({ title: "Não foi possível encontrar contatos", icon: "error" });
  }
};

export const handleRegisterContato = async (values, idPessoa, navigate) => {
  try {
    await apiDbc.post(`/contato/${idPessoa}`, values);
    Toast.fire({ title: "Contato cadastrado com sucesso", icon: "success" });
    navigateContatos(idPessoa, navigate);
  } catch (error) {
    console.log(error);
    Toast.fire({ title: "Dados incorretos", icon: "error" });
  }
};

export const handleSetEditContato = async (idPessoa, idContato, dispatch) => {
  try {
    const { data } = await apiDbc.get(`/contato/${idPessoa}`);
    const contatoFilter = data.find(
      (contato) => contato.idContato === parseInt(idContato),
    );
    const editarContato = {
      type: "SET_CONTATO_BY_ID",
      contato: contatoFilter,
    };
    dispatch(editarContato);
  } catch (error) {
    console.log(error);
    Toast.fire({
      title: "Não foi possível encontrar o contato",
      icon: "error",
    });
  }
};

export const handleEditContato = async (
  values,
  idContato,
  idPessoa,
  navigate,
) => {
  try {
    await apiDbc.put(`/contato/${idContato}`, values);
    Toast.fire({ title: "Contato editado com sucesso", icon: "success" });
    navigateContatos(idPessoa, navigate);
  } catch (error) {
    console.log(error);
    Toast.fire({ title: "Não foi possível editar o contato", icon: "error" });
  }
};

export const handleDeleteContato = async (idContato, idPessoa, dispatch) => {
  try {
    await apiDbc.delete(`/contato/${idContato}`);
    Toast.fire({ title: "Contato deletado com sucesso", icon: "success" });

    getContatos(idPessoa, dispatch);
  } catch (error) {
    console.log(error);
    Toast.fire({ title: "Não foi possível deletar o contato", icon: "error" });
  }
};

const navigateContatos = (idPessoa, navigate) => {
  navigate(`/contatos/${idPessoa}`);
};
