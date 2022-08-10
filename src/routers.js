import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Pessoas from "./pages/pessoas/Pessoas";
import { useEffect } from "react";
import { isAuth } from "./store/actions/AuthActions";
import { connect } from "react-redux";
import { Loading } from "./components/loading/Loading";
import NotFound from "./pages/notFound/NotFound";
import FormPessoa from "./pages/pessoas/FormPessoa";
import Users from "./pages/users/Users";

const Routers = ({ auth, dispatch }) => {
  useEffect(() => {
    isAuth(dispatch);
  }, []);

  if (auth.isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {auth.isLogged ? (
          <>
            <Route path="/" element={<Pessoas />} />
            <Route path="/cadastrar-pessoa" element={<FormPessoa />} />
            <Route path="/editar-pessoa/:idPessoa" element={<FormPessoa />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar-usuario" element={<Users />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(Routers);
