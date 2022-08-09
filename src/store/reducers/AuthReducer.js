const INITIAL_STATE = {
  auth: {
    token: "",
    isLogged: false,
  },
};

const authReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_LOGIN") {
    console.log("aqui");

    return {
      auth: {
        token: action.token,
        isLogged: true,
      },
    };
  }
  if (action.type === "SET_LOGOUT") {
    console.log("aqui");
    return {
      auth: {
        token: action.token,
        isLogged: false,
      },
    };
  }

  return state;
};

export default authReducer;
