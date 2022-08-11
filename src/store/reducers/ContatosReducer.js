const INITIAL_STATE = {
  contatos: [],
  contato: {},
  isLoading: true,
  isUpdate: false,
};

const contatosReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_CONTATOS") {
    return {
      ...state,
      contatos: action.contatos,
    };
  }

  if (action.type === "SET_CONTATO_BY_ID") {
    return {
      ...state,
      contato: action.contato,
      isLoading: false,
      isUpdate: true,
    };
  }

  if (action.type === "REGISTER_CONTATO") {
    return {
      ...state,
      contato: {},
      isLoading: false,
      isUpdate: false,
    };
  }

  if (action.type === "CLEAN_CONTATO") {
    return {
      ...state,
      contato: {},
      isLoading: true,
    };
  }

  return state;
};
export default contatosReducer;
