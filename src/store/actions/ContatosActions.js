import { apiDbc } from "../../api";

export const getContatos = async (idPessoa, dispatch) => {
  try {
    const { data } = await apiDbc.get(`/contato/${idPessoa}`);
    const contatos = { type: "SET_CONTATOS", contatos: data };
    dispatch(contatos);
  } catch (error) {
    console.log(error);
  }
};

export const handleRegisterContato = async (values, idPessoa, navigate) => {
  try {
    await apiDbc.post(`/contato/${idPessoa}`, values);
    navigateContatos(idPessoa, navigate);
  } catch (error) {
    console.log(error);
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
    navigateContatos(idPessoa, navigate);
  } catch (error) {
    console.log(error);
  }
};

export const handleDeleteContato = async (idContato, idPessoa, dispatch) => {
  try {
    await apiDbc.delete(`/contato/${idContato}`);
    getContatos(idPessoa, dispatch);
  } catch (error) {
    console.log(error);
  }
};

const navigateContatos = (idPessoa, navigate) => {
  navigate(`/contatos/${idPessoa}`);
};
