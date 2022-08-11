import { useEffect } from "react";
import { connect } from "react-redux";
import { BsCardText } from "react-icons/bs";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonSecondary, DefaultButton } from "../../components/button/Button";
import {
  ContainerList,
  Info,
  List,
  ListAdd,
  ListItem,
} from "../../components/list/List";
import {
  getEnderecos,
  handleDeleteEndereco,
} from "../../store/actions/EnderecosActions";
import Header from "../../components/header/Header";
import { Container } from "../../components/container/Container";
import { confirmModal } from "../../components/toast/Toast";

const Enderecos = ({ enderecos, dispatch }) => {
  const { idPessoa } = useParams();
  const navigate = useNavigate();

  const setup = () => {
    getEnderecos(idPessoa, dispatch);
  };

  useEffect(() => {
    setup();
  }, []);

  if (enderecos.length === 0) {
    return (
      <>
        <Container>
          <Header display={"inline"} page={"Pessoas"} />
          <ContainerList>
            <ListAdd>
              <ButtonSecondary
                type="button"
                onClick={() => navigate(`/cadastrar-endereco/${idPessoa}`)}
                padding={"12px 24px"}
                fontSize={"1rem"}
              >
                Cadastrar endereço <BsCardText />
              </ButtonSecondary>
            </ListAdd>

            <h2>Nenhum endereço cadastradado</h2>
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
              onClick={() => navigate(`/cadastrar-endereco/${idPessoa}`)}
              padding={"12px 24px"}
              fontSize={"1rem"}
            >
              Cadastrar endereço <BsCardText />
            </ButtonSecondary>
          </ListAdd>

          <List>
            <ul>
              {enderecos.map(
                ({
                  tipo,
                  logradouro,
                  numero,
                  complemento,
                  cep,
                  estado,
                  cidade,
                  pais,
                  idEndereco,
                }) => (
                  <ListItem key={idEndereco} columns={"repeat(3, 1fr)"}>
                    <Info>
                      <strong>Logradouro: </strong>
                      {logradouro}
                    </Info>
                    <Info>
                      <strong>Número: </strong>
                      {numero}
                    </Info>
                    <Info>
                      <strong>Complemento: </strong>
                      {complemento}
                    </Info>
                    <Info>
                      <strong>CEP: </strong>
                      {cep}
                    </Info>
                    <Info>
                      <strong>Cidade: </strong>
                      {cidade}
                    </Info>
                    <Info>
                      <strong>Estado: </strong>
                      {estado}
                    </Info>
                    <Info>
                      <strong>País: </strong>
                      {pais}
                    </Info>
                    <Info>
                      <strong>Tipo: </strong>
                      {tipo}
                    </Info>

                    <div>
                      <DefaultButton
                        type="button"
                        hoverColor={"#F12B2C"}
                        onClick={() =>
                          confirmModal(
                            "Deletar endereço?",
                            idEndereco,
                            dispatch,
                            handleDeleteEndereco,
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
                          navigate(`/editar-endereco/${idPessoa}/${idEndereco}`)
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
  enderecos: state.enderecosReducer.enderecos,
});

export default connect(mapStateToProps)(Enderecos);
