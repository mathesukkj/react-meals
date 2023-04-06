import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 50vh;
    width: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;
`;

export default function CartModal(props) {
    return (
        <>
            {createPortal(
                <>
                    <Backdrop />
                    <ModalOverlay>{props.children}</ModalOverlay>
                </>,
                document.querySelector("#modal-root")
            )}
        </>
    );
}
