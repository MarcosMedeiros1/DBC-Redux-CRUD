const INITIAL_STATE = {
  enderecos: [],
  endereco: {},
  isLoading: true,
  isUpdate: false,
};

const enderecosReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_ENDERECOS") {
    return {
      ...state,
      enderecos: action.enderecos,
    };
  }

  if (action.type === "SET_ENDERECO_BY_ID") {
    return {
      ...state,
      endereco: action.endereco,
      isLoading: false,
      isUpdate: true,
    };
  }

  if (action.type === "REGISTER_ENDERECO") {
    return {
      ...state,
      endereco: {},
      isLoading: false,
      isUpdate: false,
    };
  }

  if (action.type === "CLEAN_ENDERECO") {
    return {
      ...state,
      endereco: {},
      isLoading: true,
    };
  }

  return state;
};

export default enderecosReducer;
