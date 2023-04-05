import React from "react";
import styled from "styled-components";
import Description from "./Description";

const Img = styled.div`
    height: 50vh;
    width: 100vw;
    background-position: center;
    background-image: url("/assets/hero.jpg");
    background-size: cover;
    background-repeat: no-repeat;
`;

export default function Hero() {
    return (
        <>
            <Img />
            <Description />
        </>
    );
}
