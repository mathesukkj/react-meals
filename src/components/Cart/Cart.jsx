import React, { useContext } from "react";
import styled from "styled-components";
import CartModal from "./CartModal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.4rem;
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

export default function Cart(props) {
    const cartItems = useContext(CartContext);

    return (
        <CartModal>
            {cartItems.items.map((item) => (
                <CartItem
                    key={item.name}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                />
            ))}
            <Total>
                Total amount:
                <span>{cartItems.totalAmount.toFixed(2)}</span>
            </Total>
            <Actions>
                <BtnClose onClick={props.onShowCart}>Close</BtnClose>
                <BtnOrder>Order</BtnOrder>
            </Actions>
        </CartModal>
    );
}
