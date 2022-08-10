import { useEffect } from "react";
import {
  getPessoas,
  handleDeletarPessoa,
  navigateEditPessoa,
  navigateRegisterPessoa,
} from "../../store/actions/PessoasActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Pessoas = ({ pessoas, dispatch }) => {
  const navigate = useNavigate();
  const setup = async () => {
    getPessoas(dispatch);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <div>
      <button onClick={() => navigateRegisterPessoa(navigate, dispatch)}>
        Cadastrar
      </button>
      <ul>
        {pessoas.map(({ idPessoa, nome, dataNascimento, cpf, email }) => (
          <li key={idPessoa}>
            <span>{nome}</span>
            <span>{dataNascimento}</span>
            <span>{cpf}</span>
            <span>{email}</span>
            <button onClick={() => navigateEditPessoa(idPessoa, navigate)}>
              Editar
            </button>
            <button onClick={() => handleDeletarPessoa(idPessoa)}>
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pessoas: state.pessoasReducer.pessoas,
});

export default connect(mapStateToProps)(Pessoas);
