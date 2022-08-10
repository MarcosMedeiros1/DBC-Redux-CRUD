import { apiDbc } from "../../api";

export const handleLogin = async (values, dispatch, navigate) => {
  try {
    const { data } = await apiDbc.post("/auth", values);

    apiDbc.defaults.headers.common["Authorization"] = data;
    localStorage.setItem("token", data);

    const auth = {
      type: "SET_LOGIN",
      token: data,
    };

    dispatch(auth);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const handleLogout = (dispatch, navigate) => {
  localStorage.removeItem("token");
  apiDbc.defaults.headers.common["Authorization"] = undefined;

  const auth = {
    type: "SET_LOGIN",
    token: "",
  };

  dispatch(auth);
  navigate("/login");
};

export const isAuth = (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    apiDbc.defaults.headers.common["Authorization"] = token;

    const auth = {
      type: "SET_LOGIN",
      token: token,
    };

    dispatch(auth);
  }
};
