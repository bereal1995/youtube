import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import qs from "qs";
import {IconSettings} from "../Icons";
import {navigate} from "../../../lib/History";
import {daysAgo} from "../../../lib/Common";

function ListItem({snippet, id}) {

    const {
        thumbnails,
        title,
        channelTitle,
        description,
        publishedAt
    } = snippet

  return (
      <Container className={'list-item'}>
          <Thumb>
              <Link to={`/watch?${qs.stringify({
                  v: id,
              })}`}>
                  <img src={thumbnails.high.url} alt=""/>
              </Link>
          </Thumb>
          <Desc onClick={() => navigate(`/watch?${qs.stringify({
              v: id,
          })}`)}>
              <Detail>
                  <h3>
                      {title}
                  </h3>
                  <View>
                      <span>조회수</span>
                      <span className="dot"/>
                      <span>{daysAgo(publishedAt)}</span>
                  </View>
                  <ChannelInfo>
                      <Avatar>
                          <img src={thumbnails.high.url} alt=""/>
                      </Avatar>
                      <h4>
                          {channelTitle}
                      </h4>
                  </ChannelInfo>
                  <p>
                      {description}
                  </p>
              </Detail>
              <IconSettings className={'icon'}/>
          </Desc>
      </Container>
  )
}

const Container = styled.div`
  display:flex;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
`;

const Thumb = styled.div`
  width: 400px;
  margin-right: 16px;
  a {
    display:block;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Desc = styled.div`
    position: relative;
    display:flex;
    max-width: 600px;
    width: 100%;
    cursor: pointer;
    .icon{
        right: 0;
        top: 0;
    }
`;

const Detail = styled.div`
    overflow: hidden;
    padding-left: 10px;
    color: #aaa;
    font-size: 13px;
    h3 {
      margin-right: 20px;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      color: #fff;
    }
    h3, p {
      overflow: hidden;
      verflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;  
      -webkit-box-orient: vertical;
    }
`;

const View = styled.div`
  font-size: 13px;
  color: #aaa;  
  .dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #aaa;
    margin: 0 5px;
  }
`;

const ChannelInfo = styled.div`
   display:flex;
   align-items: center;
   padding: 12px 0;
`;

const Avatar = styled.div`
    margin-right: 8px;
    img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
`;


export default ListItem;