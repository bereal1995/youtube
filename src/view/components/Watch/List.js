import React from 'react';
import styled from "styled-components";
import ListItem from "./ListItem";

function List({snippet, activities}) {

  return (
      <Container>
          {
              activities.items.map((item,i) => <ListItem key={i} {...item}/>)
          }
      </Container>
  )
}
const Container = styled.div`
  width: 402px;
`;


export default List;