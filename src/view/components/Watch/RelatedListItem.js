import React from 'react';
import styled from "styled-components";
import {IconSettings} from "../Icons";
import {daysAgo, setViewCount} from "../../../lib/Common";
import {navigate} from "../../../lib/History";

function RelatedListItem({snippet, contentDetails}) {

    const {
        title,
        thumbnails,
        channelTitle,
        publishedAt,
    } = snippet

  return (
      <Container>
          <Thumb onClick={() => navigate(`/watch?v=${contentDetails.upload.videoId}`)}>
              <img src={thumbnails.high.url} alt={'썸네일 이미지'}/>
          </Thumb>
          <Text>
              <Title>{title}</Title>
              <div className="channel-name">{channelTitle}</div>
              <div className="channel-desc">
                  <span>{setViewCount(10)}</span>
                  <span className="dot"/>
                  <span>{daysAgo(publishedAt)}</span>
              </div>
              <IconSettings/>
          </Text>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  margin-top: 24px;
`;

const Thumb = styled.div`
  width: 168px;
  margin-right: 8px;
  cursor: pointer;
  img {
    display:block;
  }
`;

const Text = styled.div`
  flex:1;
  position: relative;
  padding-right: 20px;
  color: #aaa;
  font-size: 13px;
  line-height: 1.4;
  .channel-desc{
    display:flex;
    align-items: center;
  }
  .dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #aaa;
    margin: 0 5px;
  }
  .icon{
    right: 0;
    top: 0;
  }
`;

const Title = styled.div`
  margin-bottom: 4px;
  font-size: 14px;
  color: #fff;  
  overflow: hidden;
  verflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;  
  -webkit-box-orient: vertical;
`;


export default RelatedListItem;