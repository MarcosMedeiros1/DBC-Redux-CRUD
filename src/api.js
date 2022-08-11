import axios from "axios";

export const apiDbc = axios.create({
  baseURL: "https://dbc-pessoa-api.herokuapp.com",
});

export const apiViaCep = axios.create({
  baseURL: "https://viacep.com.br",
});
