import React from "react";
import styled from "styled-components";

const Container = styled.div`
    label {
        font-weight: 700;
        font-size: 1rem;
        font-family: sans-serif;
    }
`;

const InputGroup = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 0.5rem;

    input {
        padding: 0.2rem;
        width: 40%;
        border-radius: 0.25rem;
        border: 1px solid #ccc;
    }
`;

const Button = styled.button`
    background-color: #8b1b0c;
    border: 0;
    padding: 0.5rem;
    font-size: 1.1rem;
    width: 50%;
    margin: 0 auto;
    border-radius: 2rem;
    color: white;
`;

export default function MealItemForm() {
    return (
        <Container>
            <InputGroup>
                <label>Amount:</label>
                <input type="number" name="amount" />
            </InputGroup>
            <Button>+ Add</Button>
        </Container>
    );
}
