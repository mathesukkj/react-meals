import React from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eaeaea;

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

export default function MealItem({ name, description, price }) {
    return (
        <Container>
            <div>
                <h1>{name}</h1>
                <Description>{description}</Description>
                <Price>R${price}</Price>
            </div>
            <MealItemForm />
        </Container>
    );
}
