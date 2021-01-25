import React from 'react';
import styled from "styled-components";
import RelatedListItem from "./RelatedListItem";

function RelatedList({activities}) {

  return (
      <Container>
          {
              activities.items.filter((v,i) => i !== 0).map((item,i) => <RelatedListItem key={i} {...item}/>)
          }
      </Container>
  )
}
const Container = styled.div`
  width: 402px;
`;


export default RelatedList;