import { useEffect } from "react";
import { FaUserEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";
import {
  getPessoas,
  handleDeletarPessoa,
  navigateEditPessoa,
  navigateRegisterPessoa,
} from "../../store/actions/PessoasActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ContainerList,
  InfoPerson,
  List,
  ListAdd,
  ListHeader,
  ListItem,
} from "../../components/list/List";
import { ButtonSecondary, DefaultButton } from "../../components/button/Button";
import { FormatDateUsaToBr } from "../../utils/utils";
import Header from "../../components/header/Header";

const Pessoas = ({ pessoas, dispatch }) => {
  const navigate = useNavigate();
  const setup = async () => {
    getPessoas(dispatch);
  };

  useEffect(() => {
    setup();
  }, []);

  if (pessoas.length === 0) {
    return (
      <>
        <Header display={"none"} page={"Pessoas"} />
        <ContainerList>
          <ListAdd>
            <ButtonSecondary
              type="button"
              onClick={() => navigateRegisterPessoa(navigate, dispatch)}
              padding={"12px 24px"}
              fontSize={"1rem"}
            >
              Cadastrar pessoa <FaUserPlus />
            </ButtonSecondary>
          </ListAdd>
        </ContainerList>
      </>
    );
  }

  return (
    <>
      <Header display={"none"} page={"Pessoas"} />
      <ContainerList>
        {/*
       Modal aqui 
      */}

        <ListAdd>
          <ButtonSecondary
            type="button"
            onClick={() => navigateRegisterPessoa(navigate, dispatch)}
            padding={"12px 24px"}
            fontSize={"1rem"}
          >
            Cadastrar pessoa <FaUserPlus />
          </ButtonSecondary>
        </ListAdd>

        <List>
          <ListHeader>
            <span>Nome</span>
            <span>Data de nascimento</span>
            <span>CPF</span>
            <span>Email</span>
            <span>Ações</span>
          </ListHeader>
          <ul>
            {pessoas.map(({ idPessoa, nome, dataNascimento, cpf, email }) => (
              <ListItem key={idPessoa} columns={"repeat(5, 1fr)"}>
                <InfoPerson>
                  <strong>Nome: </strong>
                  {nome}
                </InfoPerson>
                <InfoPerson>
                  <strong>Data de nascimento: </strong>
                  {FormatDateUsaToBr(dataNascimento)}
                </InfoPerson>
                <InfoPerson>
                  <strong>CPF: </strong>
                  {cpf}
                </InfoPerson>
                <InfoPerson>
                  <strong>Email: </strong>
                  {email}
                </InfoPerson>

                <div>
                  <DefaultButton
                    type="button"
                    hoverColor={"#F12B2C"}
                    onClick={() => handleDeletarPessoa(idPessoa, dispatch)}
                  >
                    <FaTrashAlt />
                  </DefaultButton>

                  <DefaultButton
                    type="button"
                    hoverColor={"#f39c12"}
                    onClick={() => navigateEditPessoa(idPessoa, navigate)}
                  >
                    <FaUserEdit />
                  </DefaultButton>

                  <ButtonSecondary
                    type="button"
                    padding={"6px 12px"}
                    fontSize={"14px"}
                  >
                    Endereços
                  </ButtonSecondary>

                  <ButtonSecondary
                    type="button"
                    padding={"6px 12px"}
                    fontSize={"14px"}
                  >
                    Contatos
                  </ButtonSecondary>
                </div>
              </ListItem>
            ))}
          </ul>
        </List>
      </ContainerList>
    </>
  );
};

const mapStateToProps = (state) => ({
  pessoas: state.pessoasReducer.pessoas,
});

export default connect(mapStateToProps)(Pessoas);
