import { apiDbc } from "../../api";
import { Toast } from "../../components/toast/Toast";

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
    Toast.fire({
      title: "Login ou senha incorretos",
      icon: "error",
    });
  }
};

export const handleLogout = (dispatch) => {
  localStorage.removeItem("token");
  apiDbc.defaults.headers.common["Authorization"] = "";

  window.location.href = "/login";

  const logout = {
    type: "SET_LOGOUT",
  };
  dispatch(logout);
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

export const handleRegisterUser = async (values, navigate) => {
  try {
    await apiDbc.post("/auth/create", values);
    Toast.fire({
      title: "Cadastrado com sucesso",
      icon: "success",
    });
    navigate("/login");
  } catch (error) {
    console.log(error);
    Toast.fire({
      title: "Login ou senha incorretos",
      icon: "error",
    });
  }
};
