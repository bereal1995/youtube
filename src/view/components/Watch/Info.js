import React from 'react';
import styled from "styled-components";
import moment from 'moment'
import {setViewCount, thousandNumberFormat} from "../../../lib/Common";
import {Tags} from "../../../styled/Common.Styled";
import ChannelDetail from "./ChannelDetail";
import Comment from "./Comment";

export function Info({snippet,statistics,videoRating = () => {}}) {

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
    } = statistics;

  return (
      <Container>
          <Head>
              <Desc>
                  <Tags>
                      {
                          tags.map((tag,i) => <span key={i}>#{tag}</span>)
                      }
                  </Tags>
                  <h2>{title}</h2>
                  <p>
                      <span>조회수 {thousandNumberFormat(viewCount)}회</span>
                      <span className="dot"/>
                      <span>{moment(publishedAt).format('YYYY.MM.DD')}</span>
                  </p>
              </Desc>
              <Tools>
                  <Like>
                      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                           className="style-scope yt-icon youtube-icon">
                          <g className="style-scope yt-icon">
                              <path
                                  d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"
                                  className="style-scope yt-icon"/>
                          </g>
                      </svg>
                      <span onClick={() => videoRating('like')}>{setViewCount(likeCount)}</span>
                  </Like>
                  <DisLike>
                      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                           className="style-scope yt-icon youtube-icon">
                          <g className="style-scope yt-icon">
                              <path
                                  d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
                                  className="style-scope yt-icon"/>
                          </g>
                      </svg>
                      <span>{setViewCount(dislikeCount)}</span>
                  </DisLike>
                  <Share>
                      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                           className="style-scope yt-icon">
                          <g mirror-in-rtl="" className="style-scope youtube-icon ">
                              <path d="M14 9V3L22 12L14 21V15C8.44 15 4.78 17.03 2 21C3.11 15.33 6.22 10.13 14 9Z"
                                    className="style-scope yt-icon"/>
                          </g>
                      </svg>
                      <span>공유</span>
                  </Share>
                  <Save>
                      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                           className="style-scope yt-icon">
                          <g className="style-scope yt-icon youtube-icon">
                              <path
                                  d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"
                                  className="style-scope yt-icon"/>
                          </g>
                      </svg>
                      <span>저장</span>
                  </Save>
                  <DotMenu>
                      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                           className="style-scope yt-icon youtube-icon">
                          <g className="style-scope yt-icon">
                              <circle cx="5" cy="12" r="2" className="style-scope yt-icon"/>
                              <circle cx="12" cy="12" r="2" className="style-scope yt-icon"/>
                              <circle cx="19" cy="12" r="2" className="style-scope yt-icon"/>
                          </g>
                      </svg>
                  </DotMenu>
              </Tools>
          </Head>
          <ChannelDetail channelTitle={channelTitle}
                         favoriteCount={favoriteCount}
                         description={description}
          />
          <Comment/>
      </Container>
  )
}
const Container = styled.div`
    padding: 0 24px;
    color: #fff;
`;

const Head = styled.div`
    position: relative;
    padding: 20px 0 8px 0;
`;

const Desc = styled.div`
    border-bottom: 1px solid rgba(255,255,255,.1);
    h2 {
      font-size: 18px;
    }
    p {
      display:flex;
      align-items: center;
      height: 40px;
      font-size: 14px;
      color: #aaa;
      .dot {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: #aaa;
        margin: 0 5px;
      }
    }
`;

const Tools = styled.div`
  position: absolute;
  right: 0;
  bottom: 8px;
  display:flex;
  align-items: center;
  color: #aaa;
  font-size: 14px;
  > div {
    display:flex;
    align-items: center;
    padding-right: 6px;
    margin-left: 8px;
    cursor: pointer;
  }
  svg {
    width: 36px;
    height: 36px;
    padding: 6px;
    fill: #aaa;
  }
  span {
    display:block;
  }
`;

const Like = styled.div`
    
`;

const DisLike = styled.div`
    
`;

const Share = styled.div`
    
`;

const Save = styled.div`
    
`;

const DotMenu = styled.div`
    
`;

export default Info;