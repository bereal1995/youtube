import React from 'react';
import styled from "styled-components";
import VideoItem from "./VideoItem";

function VideoList({items}) {

  return (
      <Container>
          <Row>
              {
                  items.map((item, index) => (
                      <Col key={index}>
                          <VideoItem {...item}/>
                      </Col>
                  ))
              }
          </Row>
      </Container>
  )
}
const Container = styled.div`

`;

const Row = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const Col = styled.div`
    width: 25%;
    padding: 20px 10px;
`;

export default VideoList;