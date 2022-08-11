import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import pessoasReducer from "./PessoasReducer";
import enderecosReducer from "./EnderecosReducer";
import contatosReducer from "./ContatosReducer";

export default combineReducers({
  authReducer,
  pessoasReducer,
  enderecosReducer,
  contatosReducer,
});
