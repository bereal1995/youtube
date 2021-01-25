import React from 'react';
import styled from "styled-components";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

function ListItem() {

    return (
        <SkeletonTheme color='#202020' highlightColor="#333">
            <Container>
                <Thumb>
                    <Skeleton/>
                </Thumb>
                <Desc>
                    <Title>
                        <Skeleton/>
                    </Title>
                    <Detail>
                        <h3>
                            <Skeleton/>
                        </h3>
                        <h4>
                            <Avatar>
                                <Skeleton/>
                            </Avatar>
                            <Skeleton/>
                        </h4>
                        <p>
                            <Skeleton/>
                        </p>
                    </Detail>
                </Desc>
            </Container>
        </SkeletonTheme>
    )
}
const Container = styled.div`
  display:flex;
  justify-content: center;
  margin-top: 16px;
`;

const Thumb = styled.div`
  margin-right: 16px;
  .react-loading-skeleton {
    width: 400px;
    height: 300px;
  }
`;

const Desc = styled.div`
  display:flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
`;

const Title = styled.div`
  margin-bottom: 8px;
  .react-loading-skeleton {
    width: 500px;
    height: 40px;
  }
`;

const Detail = styled.div`
  .react-loading-skeleton {
    height: 20px;
    margin-bottom: 5px;
  }
  h3 {
    display:flex;
    .react-loading-skeleton {
      width: 250px;
      height: 10px;
    }
  }
  h4 {
    display:flex;
    align-items: center;
    .react-loading-skeleton {
      width: 150px;
    }
  }
  p {
    .react-loading-skeleton {
        width: 400px;
        height: 100px;
    }
  }
`;

const Avatar = styled.div`
  margin-right: 8px;
  span.react-loading-skeleton {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
  }  
`;

export default ListItem;