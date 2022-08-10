import { apiDbc } from "../../api";

export const handleLogin = async (values, dispatch, navigate) => {
  try {
    const { data } = await apiDbc.post("/auth", values);

    localStorage.setItem("token", data);
    apiDbc.defaults.headers.common["Authorization"] = data;

    const auth = {
      type: "SET_LOGGED",
      token: data,
    };

    dispatch(auth);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const handleLogout = (dispatch) => {
  localStorage.removeItem("token");
  apiDbc.defaults.headers.common["Authorization"] = undefined;

  const auth = {
    type: "SET_LOGOUT",
    token: "",
  };

  dispatch(auth);
};

export const isAuth = (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    apiDbc.defaults.headers.common["Authorization"] = token;

    const auth = {
      type: "SET_LOGGED",
      token: token,
    };

    dispatch(auth);
  } else {
    const auth = {
      type: "SET_LOGIN",
    };
    dispatch(auth);
  }
};
