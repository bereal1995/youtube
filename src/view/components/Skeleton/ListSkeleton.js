import React from 'react';
import styled from "styled-components";
import ListItem from "./ListItem";

function ListSkeleton() {

    const length = [1,2,3,4,5,6,7,8];

    return (
        <Container>
                {length.map((item,i) => <ListItem key={i}/>)}
        </Container>
    )
}
const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 56px 20px 0;
  margin-left: 72px;
  background: #181818;
`;

export default ListSkeleton;