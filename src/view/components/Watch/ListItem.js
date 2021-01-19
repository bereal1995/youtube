import React from 'react';
import styled from "styled-components";
import {IconSettings} from "../Icons";

function ListItem({snippet}) {

    const {
        title,
        thumbnails,
        channelTitle
    } = snippet

  return (
      <Container>
          <Thumb>
              <img src={thumbnails.medium.url} alt={'썸네일 이미지'}/>
          </Thumb>
          <Text>
              <Title>{title}</Title>
              <div className="channel-name">{channelTitle}</div>
              <div className="channel-desc">
                  <span>조회수 100만회</span>
                  <span className="dot"/>
                  <span>1개월 전</span>
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


export default ListItem;