import React from 'react';
import styled from "styled-components";
import WatchContainer from "../../Containers/WatchContainer";

function Watch(props) {
    
  return (
      <Container>
        <WatchContainer {...props}/>
      </Container>
  )
}
const Container = styled.div`

`;


export default Watch;