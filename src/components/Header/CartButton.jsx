import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../context/cart-context";

const Container = styled.button`
    padding: 1rem;
    cursor: pointer;
    background-color: #451602;
    font-size: 1.25rem;
    border: 0;
    color: white;
    font-weight: 600;
    display: flex;
    font-family: Montserrat, sans-serif;
    border-radius: 2rem;
    align-items: center;
    padding: 1rem 3rem;
    gap: 0.6rem;
`;

const ItemsCount = styled.div`
    background-color: #b03b17;
    border-radius: 2.5rem;
    padding: 0.1rem 0.8rem;
`;

export default function CartButton(props) {
    const context = useContext(CartContext);

    const totalItems = context.items.reduce((total, item) => {
        return total + item.amount;
    }, 0);

    return (
        <Container onClick={props.onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
            >
                <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
            </svg>
            Your cart
            <ItemsCount>{totalItems}</ItemsCount>
        </Container>
    );
}
