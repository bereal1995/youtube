import React from 'react';
import styled from "styled-components";

function Player({source}) {

  return (
      <Container>
          <EmbedContainer dangerouslySetInnerHTML={{__html: source?.embedHtml}}/>
      </Container>
  )
}
const Container = styled.div`

`;

const EmbedContainer = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    iframe {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }
`;


export default Player;