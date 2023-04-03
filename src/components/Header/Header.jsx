import styled from "styled-components";

const Container = styled.div`
    background-color: #8b1b0c;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 1.2rem;
`;

const Nav = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: space-between;
`;

const Logo = styled.span`
    font-family: Montserrat, sans-serif;
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
`;

export default function Header() {
    return (
        <Container>
            <Nav>
                <Logo>ReactMeals</Logo>
            </Nav>
        </Container>
    );
}
