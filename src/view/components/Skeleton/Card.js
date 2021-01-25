import React from 'react';
import styled from "styled-components";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

function Card() {

  return (
      <SkeletonTheme color='#202020' highlightColor="#333">
          <Container>
              <Thumb>
                  <Skeleton/>
              </Thumb>
              <Desc>
                  <Avatar>
                      <Skeleton/>
                  </Avatar>
                  <Detail>
                      <h3>
                          <Skeleton/>
                      </h3>
                      <h4>
                          <Skeleton/>
                      </h4>
                  </Detail>
              </Desc>
          </Container>
      </SkeletonTheme>
  )
}
const Container = styled.div`
  display:flex;
  flex-direction: column;
`;

const Thumb = styled.div`
  margin-bottom: 12px;
  .react-loading-skeleton {
    width: 316px;
    height: 237px;
  }
`;

const Desc = styled.div`
  display:flex;
  
`;

const Avatar = styled.div`
  margin-right: 12px;
  .react-loading-skeleton {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
  }  
`;

const Detail = styled.div`
  .react-loading-skeleton {
    height: 30px;
    margin-bottom: 5px;
  }
  h3 {
    .react-loading-skeleton {
      width: 250px;
    }
  }
  h4 {
    .react-loading-skeleton {
      width: 150px;
    }
  }
`;


export default Card;