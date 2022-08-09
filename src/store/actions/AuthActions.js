import { apiDbc } from "../../api";

export const handleLogin = async (values) => {
  console.log("aqui");
  try {
    const { data } = await apiDbc.post("/auth", values);

    localStorage.setItem("token", data);
    apiDbc.defaults.headers.common["authorization"] = data;
  } catch (error) {
    console.log(error);
  }
  return { type: "SET_LOGIN" };
};

export const handleLogout = () => {
  console.log("aqui");
  localStorage.removeItem("token");
  apiDbc.defaults.headers.common["Authorization"] = undefined;

  return { type: "SET_LOGOUT" };
};
