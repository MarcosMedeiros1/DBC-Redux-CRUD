import { connect } from "react-redux";

const Pessoas = ({ pessoas }) => {
  return (
    <div>
      {pessoas.map((pessoa) => (
        <div key={pessoa.idPessoa}>
          <span>{pessoa.nome}</span>
          <span>{pessoa.dataNascimento}</span>
          <span>{pessoa.cpf}</span>
          <span>{pessoa.email}</span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pessoas: state.pessoasReducer.pessoas,
});

export default connect(mapStateToProps)(Pessoas);
