import { apiDbc } from "../../api";

const buscaPessoas = () => {
  // try {
  //   const { data } = apiDbc.get("/pessoa?pagina=0&tamanhoDasPaginas=20");
  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }
};

const INITIAL_STATE = {
  pessoas: buscaPessoas(),
};

const pessoasReducer = (state = INITIAL_STATE) => {
  return {
    state,
  };
};

export default pessoasReducer;
