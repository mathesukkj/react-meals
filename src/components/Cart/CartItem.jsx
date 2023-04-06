import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #8a2b06;
    padding: 1rem 0.25rem;
    margin: 1rem 0;

    > div {
        width: 60%;
    }
`;

const Title = styled.h2`
    margin: 0 0 0.5rem 0;
    color: #363636;
    font-size: 1.35rem;
`;

const Price = styled.div`
    font-weight: bold;
    color: #8a2b06;
    font-size: 1.2rem;
`;

const Amount = styled.div`
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    color: #363636;
    font-size: 1rem;
`;

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
        font-weight: bold;
        font-size: 1.25rem;
        color: #8a2b06;
        border: 1px solid #8a2b06;
        width: 3rem;
        text-align: center;
        border-radius: 6px;
        background-color: transparent;
        cursor: pointer;
        margin-left: 1rem;
        margin: 0.25rem;
    }
`;

const Flex = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-between;
    align-items: center;
`;

export default function CartItem({ name, price }) {
    return (
        <Container>
            <div>
                <Title>{name}</Title>
                <Flex>
                    <Price>{price}</Price>
                    <Amount>x2</Amount>
                </Flex>
            </div>
            <Actions>
                <button>+</button>
                <button>-</button>
            </Actions>
        </Container>
    );
}
