import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BsCardText } from "react-icons/bs";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { ButtonSecondary, DefaultButton } from "../../components/button/Button";
import { Container } from "../../components/container/Container";
import Header from "../../components/header/Header";
import {
  ContainerList,
  Info,
  List,
  ListAdd,
  ListItem,
} from "../../components/list/List";
import {
  getContatos,
  handleDeleteContato,
} from "../../store/actions/ContatosActions";
import { confirmModal } from "../../components/toast/Toast";

const Contatos = ({ contatos, dispatch }) => {
  const { idPessoa } = useParams();
  const navigate = useNavigate();

  const setup = () => {
    getContatos(idPessoa, dispatch);
  };

  useEffect(() => {
    setup();
  }, []);

  if (contatos.length === 0) {
    return (
      <>
        <Container>
          <Header display={"inline"} page={"Pessoas"} />
          <ContainerList>
            <ListAdd>
              <ButtonSecondary
                type="button"
                onClick={() => navigate(`/cadastrar-contato/${idPessoa}`)}
                padding={"12px 24px"}
                fontSize={"1rem"}
              >
                Cadastrar contato <BsCardText />
              </ButtonSecondary>
            </ListAdd>

            <h2>Nenhum contato cadastradado</h2>
          </ContainerList>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Header display={"inline"} page={"Pessoas"} />
        <ContainerList>
          <ListAdd>
            <ButtonSecondary
              type="button"
              onClick={() => navigate(`/cadastrar-contato/${idPessoa}`)}
              padding={"12px 24px"}
              fontSize={"1rem"}
            >
              Cadastrar contato <BsCardText />
            </ButtonSecondary>
          </ListAdd>

          <List>
            <ul>
              {contatos.map(
                ({ tipoContato, telefone, descricao, idContato }) => (
                  <ListItem key={idContato} columns={"repeat(3, 1fr)"}>
                    <Info>
                      <strong>Tipo: </strong>
                      {tipoContato}
                    </Info>
                    <Info>
                      <strong>Telefone: </strong>
                      {telefone}
                    </Info>
                    <Info>
                      <strong>Descrição: </strong>
                      {descricao}
                    </Info>

                    <div>
                      <DefaultButton
                        type="button"
                        hoverColor={"#F12B2C"}
                        onClick={() =>
                          confirmModal(
                            "Deletar contato?",
                            idContato,
                            dispatch,
                            handleDeleteContato,
                            idPessoa,
                          )
                        }
                      >
                        <FaTrashAlt />
                      </DefaultButton>

                      <DefaultButton
                        type="button"
                        hoverColor={"#f39c12"}
                        onClick={() =>
                          navigate(`/editar-contato/${idPessoa}/${idContato}`)
                        }
                      >
                        <FaEdit />
                      </DefaultButton>
                    </div>
                  </ListItem>
                ),
              )}
            </ul>
          </List>
        </ContainerList>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  contatos: state.contatosReducer.contatos,
});

export default connect(mapStateToProps)(Contatos);
