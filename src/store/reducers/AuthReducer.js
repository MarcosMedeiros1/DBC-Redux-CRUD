const INITIAL_STATE = {
  auth: {
    token: "",
    isLogged: false,
    isLoading: true,
  },
};

const authReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_LOGIN") {
    return {
      auth: {
        ...state,
        isLoading: false,
      },
    };
  }

  if (action.type === "SET_LOGGED") {
    return {
      auth: {
        token: action.token,
        isLogged: true,
        isLoading: false,
      },
    };
  }

  if (action.type === "SET_LOGOUT") {
    return {
      auth: {
        token: "",
        isLogged: false,
        isLoading: true,
      },
    };
  }

  if (action.type === "SET_LOADING") {
    return {
      auth: {
        ...state,
        isLoading: action.isLoading,
      },
    };
  }

  return state;
};

export default authReducer;
