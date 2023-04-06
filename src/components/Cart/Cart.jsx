import React from "react";
import styled from "styled-components";
import CartModal from "./CartModal";

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
`;

const Actions = styled.div`
    text-align: right;

    button {
    }
`;

const BtnClose = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
    color: #b11408;
    transition: 0.3s;

    :hover {
        background-color: #b11408;
        color: white;
    }
`;

const BtnOrder = styled.button`
    cursor: pointer;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
    background-color: #8a2b06;
    color: white;
`;

export default function Cart() {
    const cartItems = [];

    return (
        <CartModal>
            Cart
            <Total>
                Total amount
                <span>35.62</span>
            </Total>
            <Actions>
                <BtnClose>Close</BtnClose>
                <BtnOrder>Order</BtnOrder>
            </Actions>
        </CartModal>
    );
}
