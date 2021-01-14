import React from 'react'
import styled from 'styled-components';
import {GlobalStyle} from "../styled/Reset.Styled";
import Routes from "./routes/Routes";
import Header from "./components/Header";
import SideMenuBig from "./components/SideMenu/SideMenuBig";
import {useSelector} from "react-redux";

const App = () => {

    const app = useSelector(state => state.app);

    return (
        <Container>
            <GlobalStyle/>
            <Header/>
            {
                app.sidebar && <SideMenuBig/>
            }
            <Routes sidebar={app.sidebar}/>
        </Container>
    )
}

const Container = styled.div`
    
`;

export default App;