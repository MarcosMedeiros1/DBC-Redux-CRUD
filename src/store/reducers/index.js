import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import pessoasReducer from "./PessoasReducer";

export default combineReducers({
  authReducer,
  pessoasReducer,
});
