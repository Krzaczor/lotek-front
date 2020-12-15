import React, { useEffect } from "react";
import { createGlobalStyle, keyframes } from "styled-components";
import ReactModal from "react-modal";

import { device } from '../../config/styles';
import { useDrawsContext } from '../../hooks/useDrawsContext';

import Wrapper from './Wrapper';
import Button from './Button';

ReactModal.defaultStyles = {
  overlay: {
    ...ReactModal.defaultStyles.overlay,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {},
};

const keyframeForOverlay = (open) => keyframes`
  0% { background-color: ${open ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.6)"}; }
  100% { background-color: ${open ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0)"}; }
`;

const keyframeForContent = (open) => keyframes`
  0% { transform: ${open ? "translateY(100%)" : "translateY(0)"}; }
  100% { transform: ${open ? "translateY(0)" : "translateY(100%)"}; }
`;

const ModalStyled = createGlobalStyle`
  .ReactModal__Overlay {
    animation: ${(props) => keyframeForOverlay(props.open)} 0.2s linear forwards;
    z-index: 999;

    @media ${device.tablet} {
        opacity: 0;
        visilibity: collapse;
        z-index: -999;
    }
  }

  .ReactModal__Content {
    animation: ${(props) => keyframeForContent(props.open)} 0.4s cubic-bezier(0.18, 0.89, 0.2, 1.05) forwards;
    z-index: 999;

    width: calc(100vw - 30px);
    height: calc(100vh - 30px);

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-row-gap: 10px;

    @media ${device.tablet} {
        opacity: 0;
        visilibity: collapse;
        z-index: -999;
    }
  }
`;

const styleBodyElement = document.body.style;

const Modal = ({children}) => {
  const { showModal, setShowModal } = useDrawsContext();

  useEffect(() => {
    showModal
        ? styleBodyElement.setProperty("overflow", "hidden")
        : styleBodyElement.removeProperty("overflow");
  }, [showModal]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ReactModal
        isOpen={showModal}
        appElement={document.querySelector("#root")}
        closeTimeoutMS={300}
        shouldFocusAfterRender={true}
        shouldReturnFocusAfterClose={true}
        onRequestClose={handleToggleModal}
    >
        <ModalStyled open={showModal} />
        <Wrapper>{children}</Wrapper>
        <Button handleClick={handleToggleModal}>Anuluj</Button>
    </ReactModal>
  );
}

export default Modal;
