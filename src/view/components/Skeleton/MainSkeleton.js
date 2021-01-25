import React from 'react';
import styled from "styled-components";
import Card from "./Card";

function MainSkeleton() {

    const length = [1,2,3,4,5,6,7,8];

  return (
      <Container>
          <Row>
            {length.map((item,i) => (
                <Col key={i}>
                    <Card/>
                </Col>
            ))}
          </Row>
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

const Row = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const Col = styled.div`
    width: 25%;
    padding: 20px 10px;
`;


export default MainSkeleton;