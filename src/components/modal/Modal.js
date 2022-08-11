import {
  BackgroundModal,
  ContainerModal,
  TextModal,
  ButtonsModal,
} from "./Modal.styled";
import { ButtonPrimary, ButtonSecondary } from "../button/Button";

const Modal = ({ onCancel = () => {}, onConfirm = () => {}, children }) => {
  const handleOutsideClick = (event) => {
    if (event.target.id === "modal") {
      onCancel();
    }
  };

  return (
    <BackgroundModal id="modal" onClick={handleOutsideClick}>
      <ContainerModal>
        <TextModal>{children}</TextModal>

        <ButtonsModal>
          <ButtonSecondary padding={"6px 8px"} onClick={onCancel}>
            Cancelar
          </ButtonSecondary>

          <ButtonPrimary padding={"6px 8px"} onClick={onConfirm}>
            Confirmar
          </ButtonPrimary>
        </ButtonsModal>
      </ContainerModal>
    </BackgroundModal>
  );
};
export default Modal;
