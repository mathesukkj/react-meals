import React, { useEffect, useState } from "react";
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
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0.25rem;

    input {
        padding: 0.25rem;
        margin-left: 0.5rem;
        width: 25%;
        border-radius: 0.25rem;
        border: 1px solid #ccc;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    background-color: #8b1b0c;
    border: 0;
    padding: 0.3rem;
    font-size: 1.1rem;
    width: 50%;
    border-radius: 1rem;
    color: white;
    cursor: pointer;
`;

export default function MealItemForm({ onAdd, amount, setAmount }) {
    const [itemAmount, setItemAmount] = useState(1);

    function handleChange(e) {
        setItemAmount(e.target.value);
    }

    function onClick() {
        setAmount((prev) => prev + parseInt(itemAmount));
        onAdd();
    }

    return (
        <Container>
            <InputGroup>
                <label>Amount:</label>
                <input
                    type="number"
                    value={itemAmount}
                    name="amount"
                    onChange={handleChange}
                />
            </InputGroup>
            <ButtonContainer>
                <Button onClick={onClick}>+ Add</Button>
            </ButtonContainer>
        </Container>
    );
}
