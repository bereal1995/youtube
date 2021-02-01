import React from 'react';
import styled from "styled-components";
import CommentItem from "./CommentItem";
import {useSelector} from "react-redux";

function Comment() {

    const commentCount = useSelector(state => state.video.watch.items[0].statistics.commentCount);
    const {commentList} = useSelector(state => state.video);

  return (
      <Container>
          <Title>
              <p>댓글 {commentCount}개</p>
              <ButtonSort>
                  <div>
                      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                           className="style-scope yt-icon youtube-icon">
                          <g className="style-scope yt-icon">
                              <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" className="style-scope yt-icon"/>
                              <path d="M0 0h24v24H0z" fill="none" className="style-scope yt-icon"/>
                          </g>
                      </svg>
                  </div>
                  <span>정렬 기준</span>
              </ButtonSort>
          </Title>
          {
              commentList.items.map((item, i) => <CommentItem key={i} {...item}/>)
          }
      </Container>
  )
}
const Container = styled.div`
  margin: 24px 0 32px;
`;

const Title = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 24px;
  p {
    margin-right: 32px;
    font-size: 16px;
    word-break: break-word;
  }
`;

const ButtonSort = styled.div`
  display:flex;
  align-items: center;
  font-size: 14px;
  color: #aaa;
  >div {
    cursor: pointer;
  }
  svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    fill: #aaa;
  }
`;


export default Comment;