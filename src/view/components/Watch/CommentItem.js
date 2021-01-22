import React from 'react';
import styled from "styled-components";
import {daysAgo, setViewCount} from "../../../lib/Common";

function CommentItem({snippet}) {

    const {
        authorProfileImageUrl,
        authorDisplayName,
        publishedAt,
        textDisplay,
        totalReplyCount,
        likeCount,
    } = snippet.topLevelComment.snippet

  return (
      <Container>
          <Avatar>
              <img src={authorProfileImageUrl} alt="아이디 썸네일"/>
          </Avatar>
          <Text>
              <Title>
                  {authorDisplayName}
                  <span>{daysAgo(publishedAt)}</span>
              </Title>
              <Desc dangerouslySetInnerHTML={{__html: textDisplay}}/>
              <Button>
                  <Like>
                      <div>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                               className="style-scope yt-icon youtube-icon">
                              <g className="style-scope yt-icon">
                                  <path
                                      d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"
                                      className="style-scope yt-icon"/>
                              </g>
                          </svg>
                      </div>
                      {setViewCount(likeCount)}
                  </Like>
                  <DisLike>
                      <div>
                          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                               className="style-scope yt-icon youtube-icon">
                              <g className="style-scope yt-icon">
                                  <path
                                      d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
                                      className="style-scope yt-icon"/>
                              </g>
                          </svg>
                      </div>
                  </DisLike>
                  <Reply>답글</Reply>
              </Button>
              {
                  totalReplyCount &&
                  <More>
                      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                           className="style-scope yt-icon youtube-icon">
                          <g className="style-scope yt-icon">
                              <path d="M7 10l5 5 5-5z" className="style-scope yt-icon"/>
                          </g>
                      </svg>
                      답글 {totalReplyCount}개 보기
                  </More>
              }
          </Text>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  color: #fff;
  font-size: 13px;
  margin-bottom: 16px;
  line-height: 1.4;
`;

const Avatar = styled.div`
  margin-right: 16px;
  overflow: hidden;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Text = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  flex:1;
`;

const Title = styled.div`
  margin-bottom: 4px;
  span {
    margin-left: 4px;
    color: #aaa;
  }
`;

const Desc = styled.div`
  font-size: 14px;
  a {
    color: #3ea6ff;
  }
`;

const Button = styled.div`
  display:flex;
  align-items: center;
  >div>div {
    padding: 8px;
    cursor: pointer;
    &:hover {
      svg {
        fill: #fff;
      }
    }
  }
  svg {
    width: 16px;
    height: 16px;
    fill: #aaa;
    transition: .4s;
  }
`;

const Like = styled.div`
  display:flex;
  align-items: center;
  margin-left: -8px;
  color: #aaa;
`;

const DisLike = styled.div`
  margin-left: 8px;  
`;

const Reply = styled.div`
  padding: 8px 16px;
  color: #aaa;
  cursor: pointer;
`;

const More = styled.div`
  display:flex;
  align-items: center;
  margin-left: -6px;
  color: #3ea6ff;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: #3ea6ff;
  }  
`;

export default CommentItem;