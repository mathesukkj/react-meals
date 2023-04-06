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

const meals = [
    {
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

export default function AllMeals() {
    return (
        <Container>
            {meals.map((item) => (
                <MealItem
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                />
            ))}
        </Container>
    );
}
