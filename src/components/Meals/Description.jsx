import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #323132;
    color: white;
    text-align: center;
    width: 50%;
    border-radius: 1.5rem;
    margin: -10rem auto 0;
    padding: 2rem;

    h1 {
        font-size: 2.4rem;
        margin-bottom: 1.5rem;
    }

    p {
        margin-bottom: 1rem;
        font-size: 1.2rem;
        font-weight: 400;
        font-family: "Segoe UI";
    }
`;

export default function Description() {
    return (
        <Container>
            <h1>Delicious Food, Delivered to You</h1>
            <p>
                Choose your favorite meal from our broad selection of available
                meals and enjoy a delicious lunch or dinner at home
            </p>
            <p>
                All our meals are cooked with high-quality ingredients,
                just-in-time and of course by experienced chefs!
            </p>
        </Container>
    );
}
