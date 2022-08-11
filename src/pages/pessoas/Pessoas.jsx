import { useEffect } from "react";
import { FaUserEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";
import {
  getPessoas,
  handleDeletePessoa,
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
import { Container } from "../../components/container/Container";

const Pessoas = ({ pessoas, dispatch }) => {
  const navigate = useNavigate();
  const setup = () => {
    getPessoas(dispatch);
  };

  useEffect(() => {
    setup();
  }, []);

  if (pessoas.length === 0) {
    return (
      <>
        <Container>
          <Header display={"none"} page={"Pessoas"} />
          <ContainerList>
            <ListAdd>
              <ButtonSecondary
                type="button"
                onClick={() => navigate("/cadastrar-pessoa")}
                padding={"12px 24px"}
                fontSize={"1rem"}
              >
                Cadastrar pessoa <FaUserPlus />
              </ButtonSecondary>
            </ListAdd>
            <h2>Nenhuma pessoa cadastrada</h2>
          </ContainerList>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Header display={"none"} page={"Pessoas"} />
        <ContainerList>
          <ListAdd>
            <ButtonSecondary
              type="button"
              padding={"12px 24px"}
              fontSize={"1rem"}
              onClick={() => navigate("/cadastrar-pessoa")}
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
                    {cpf
                      .replace(/\D/g, "")
                      .replace(/(\d{3})(\d)/, "$1.$2")
                      .replace(/(\d{3})(\d)/, "$1.$2")
                      .replace(/(\d{3})(\d)/, "$1-$2")
                      .replace(/(-\d{2})\d+?$/, "$1")}
                  </InfoPerson>
                  <InfoPerson>
                    <strong>Email: </strong>
                    {email}
                  </InfoPerson>

                  <div>
                    <DefaultButton
                      type="button"
                      hoverColor={"#F12B2C"}
                      onClick={() => handleDeletePessoa(idPessoa, dispatch)}
                    >
                      <FaTrashAlt />
                    </DefaultButton>

                    <DefaultButton
                      type="button"
                      hoverColor={"#f39c12"}
                      onClick={() => navigate(`/editar-pessoa/${idPessoa}`)}
                    >
                      <FaUserEdit />
                    </DefaultButton>

                    <ButtonSecondary
                      type="button"
                      padding={"6px 12px"}
                      fontSize={"14px"}
                      onClick={() => navigate(`/enderecos/${idPessoa}`)}
                    >
                      Endereços
                    </ButtonSecondary>

                    <ButtonSecondary
                      type="button"
                      padding={"6px 12px"}
                      fontSize={"14px"}
                      onClick={() => navigate(`/contatos/${idPessoa}`)}
                    >
                      Contatos
                    </ButtonSecondary>
                  </div>
                </ListItem>
              ))}
            </ul>
          </List>
        </ContainerList>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  pessoas: state.pessoasReducer.pessoas,
});

export default connect(mapStateToProps)(Pessoas);
