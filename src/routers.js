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
import Enderecos from "./pages/enderecos/Enderecos";
import FormEndereco from "./pages/enderecos/FormEndereco";
import Contatos from "./pages/contatos/Contatos";
import FormContato from "./pages/contatos/FormContato";

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
            <Route path="/pessoas" element={<Pessoas />} />
            <Route path="/cadastrar-pessoa" element={<FormPessoa />} />
            <Route path="/editar-pessoa/:idPessoa" element={<FormPessoa />} />

            <Route path="/enderecos/:idPessoa" element={<Enderecos />} />
            <Route
              path="/cadastrar-endereco/:idPessoa"
              element={<FormEndereco />}
            />
            <Route
              path="/editar-endereco/:idPessoa/:idEndereco"
              element={<FormEndereco />}
            />

            <Route path="/contatos/:idPessoa" element={<Contatos />} />
            <Route
              path="/cadastrar-contato/:idPessoa"
              element={<FormContato />}
            />
            <Route
              path="/editar-contato/:idPessoa/:idContato"
              element={<FormContato />}
            />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
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
