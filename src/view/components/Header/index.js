import React from 'react'
import styled from 'styled-components';
import Start from "./Start";
import Center from "./Center";
import End from "./End";

const Header = () => {

    return (
        <Container>
            <Start/>
            <Center/>
            <End/>
        </Container>
    )
}

const Container = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    background: #212121;
    padding: 0 18px;  
`;

export default Header;