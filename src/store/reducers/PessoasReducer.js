const INITIAL_STATE = {
  pessoas: [],
  pessoa: {},
  isLoading: true,
  isUpdate: false,
};

const pessoasReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_PESSOA") {
    return {
      ...state,
      pessoas: action.pessoas,
    };
  }

  if (action.type === "SET_PESSOA_BY_ID") {
    return {
      ...state,
      pessoa: action.pessoa,
      isLoading: false,
      isUpdate: true,
    };
  }

  if (action.type === "REGISTER_PESSOA") {
    return {
      ...state,
      pessoa: {},
      isLoading: false,
      isUpdate: false,
    };
  }

  if (action.type === "CLEAN_PEOPLE") {
    return {
      ...state,
      pessoa: {},
      isLoading: true,
    };
  }

  return state;
};

export default pessoasReducer;
