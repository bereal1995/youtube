import React from 'react';
import styled from "styled-components";
import {IconSettings} from "../Icons";
import {thousandNumberFormat} from "../../../lib/Common";
import {Link} from "react-router-dom";
import qs from 'qs'

function VideoItem({id,snippet, statistics}) {

    const {
        thumbnails,
        title,
        channelTitle,
    } = snippet

    const {
        viewCount,
        likeCount,
        dislikeCount,
        favoriteCount,
        commentCount
    } = statistics;

    const setViewCount = (count) => {
        if (count / 10000 >= 1) {
            return thousandNumberFormat(Math.floor(count / 10000)) + '만';
        } else {
            return thousandNumberFormat(count)
        }
    }
    
  return (
      <Container className={'video-item'}>
          <Thumb>
              <Link to={`/watch?${qs.stringify({
                  v: id,
              })}`}>
                  <img src={thumbnails.high.url} alt=""/>
              </Link>
          </Thumb>
          <Desc>
              <Avatar>
                  <img src={thumbnails.high.url} alt=""/>
              </Avatar>
              <Detail>
                  <h3>
                      {title}
                  </h3>
                  <h4>
                      {channelTitle}
                  </h4>
                  <p>
                      <span>조회수 {setViewCount(viewCount)}</span>
                      <span className="dot"/>
                      <span>1주 전</span>
                  </p>
                  <IconSettings/>
              </Detail>
          </Desc>
      </Container>
  )
}
const Container = styled.div`

`;

const Thumb = styled.div`
    
`;

const Desc = styled.div`
    position: relative;
    display:flex;
    padding: 10px 25px 10px 0;
    
`;

const Detail = styled.div`
    flex:1;
    overflow: hidden;
    padding-left: 10px;
    h3 {
      margin-bottom: 6px;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      color: #fff;
    }
    h4 {
      font-size: 14px;
      color: #aaa;
    }
    p {
      display:flex;
      align-items: center;
      margin-top: 5px;
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
    .icon{
        right: 0;
        top: 10px;
    }
`;

const Avatar = styled.div`
    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
`;

export default VideoItem;