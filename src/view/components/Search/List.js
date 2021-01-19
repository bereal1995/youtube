import React from 'react';
import styled from "styled-components";
import ListItem from "./ListItem";

function List({list}) {

  return (
      <Container>
          {
              list.items.map((item, i) => <ListItem key={i} {...item}/>)
          }
      </Container>
  )
}
const Container = styled.div`
  padding: 0 24px;
`;


export default List;