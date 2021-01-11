import React from 'react';
import {Route, Switch} from "react-router-dom";
import styled from 'styled-components';
import NotFound from "../pages/Results/NotFound";
import Home from "../pages/Home";
import SignIn from "../pages/Sign/SignIn";
import SignUp from "../pages/Sign/SignUp";
import Watch from "../pages/Watch";

const Routes = ({sidebar}) => {

    return (
        <Container sidebar={sidebar}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/watch" component={Watch}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>
                <Route component={NotFound}/>
            </Switch>
        </Container>
    )
}


const Container = styled.div`
    
    ${props => props.sidebar ? 'margin-left: 240px;' : 'margin-left:72px;'}
`;

export default Routes;

