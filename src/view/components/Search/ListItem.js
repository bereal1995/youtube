import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import qs from "qs";
import {IconSettings} from "../Icons";
import {navigate} from "../../../lib/History";

function ListItem({snippet, id}) {

    const {
        thumbnails,
        title,
        channelTitle,
        description,
    } = snippet


  return (
      <Container className={'search-item'}>
          <Thumb>
              <Link to={`/watch?${qs.stringify({
                  v: id?.videoId,
              })}`}>
                  <img src={thumbnails.high.url} alt=""/>
              </Link>
          </Thumb>
          <Desc onClick={() => navigate(`/watch?${qs.stringify({
              v: id?.videoId,
          })}`)}>
              <Detail>
                  <h3>
                      {title}
                  </h3>
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
  margin-top: 16px;
`;

const Thumb = styled.div`
  margin-right: 16px;
  a {
    display:block;
  }
`;

const Desc = styled.div`
    position: relative;
    display:flex;
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