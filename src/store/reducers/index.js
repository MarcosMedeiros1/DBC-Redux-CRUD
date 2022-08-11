import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import pessoasReducer from "./PessoasReducer";
import enderecosReducer from "./EnderecosReducer";

export default combineReducers({
  authReducer,
  pessoasReducer,
  enderecosReducer,
});
