import React from "react";
import styled from "styled-components";
import MealItem from "./MealItem/MealItem";

const Container = styled.div`
    width: 60%;
    margin: 0 auto;
    background-color: #fffdff;
    margin-top: 1.5rem;
    border-radius: 1.1rem;
    padding: 1rem;
`;

export default function AllMeals() {
    return (
        <Container>
            <MealItem />
            <MealItem />
            <MealItem />
        </Container>
    );
}
