import React from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";

const Container = styled.div`
    width: 100%;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 1.4rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

const Description = styled.p`
    font-size: 1.15rem;
    color: #161616df;
    font-style: italic;
`;

const Price = styled.span`
    color: #ce5f1f;
    font-weight: 700;
    font-family: sans-serif;
    font-size: 1.3rem;
`;

export default function MealItem() {
    return (
        <Container>
            <div>
                <h1>Sushi</h1>
                <Description>Finest fish and veggies</Description>
                <Price>R$22.99</Price>
            </div>
            <MealItemForm />
        </Container>
    );
}
