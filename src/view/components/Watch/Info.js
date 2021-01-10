import React from 'react';
import styled from "styled-components";
import moment from 'moment'
import {thousandNumberFormat} from "../../../lib/Common";

function Info({snippet,statistics}) {

    const {
        title,
        description,
        publishedAt,
        channelTitle,
        tags = [],
    } = snippet

    const {
        viewCount,
        likeCount,
        dislikeCount,
        favoriteCount,
        commentCount
    } = statistics;


    console.log('@@snippet',snippet);
  return (
      <Container>
          <Head>
              <Desc>
                  <Tags>
                      {
                          tags.map((tag,i) => <span key={i}>{tag}</span>)
                      }
                  </Tags>
                  <h2>{title}</h2>
                  <p>
                      <span>{thousandNumberFormat(viewCount)}회</span>
                      <span className="dot"/>
                      <span>{moment(publishedAt).format('YYYY.MM.DD')}</span>
                  </p>
              </Desc>
              <Tools>

              </Tools>
          </Head>
          <ChannelDetail>
              <Avatar></Avatar>
              <ChannelDesk>
                  <h3></h3>
                  <div className="follower">
                      구독자 100만명
                  </div>
                  <p>
                      {description}
                  </p>
                  <Tags>
                      {

                      }
                  </Tags>
                  <div className="control">간략히</div>
              </ChannelDesk>
          </ChannelDetail>
      </Container>
  )
}
const Container = styled.div`
      color: #fff;
      .dot {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: #aaa;
        margin: 0 5px;
      }
`;

const Head = styled.div`
    
`;

const Desc = styled.div`
    
`;

const Tags = styled.div`
    
`;

const Tools = styled.div`
    
`;

const ChannelDetail = styled.div`
    
`;

const Avatar = styled.div`
    
`;

const ChannelDesk = styled.div`
    
`;


export default Info;