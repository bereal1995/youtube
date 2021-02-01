import React, {useState} from 'react';
import styled from "styled-components";
import {thousandNumberFormat} from "../../../lib/Common";

function ChannelDetail(props) {
    const {
        channelTitle,
        favoriteCount,
        description
    } = props;

    const [control, setControl] = useState(false);

    const descriptionChange = (desc) => {
        const result = desc.split(/(\n|\r\n)/g);

        return result.map((arr) => {

            if (arr.substr(0,1) === '#') return arr.split(' ').map((item) => `<a href=https://www.youtube.com/hashtag/${item.substr(1)}>${item} </a>`).join('')

            return arr.split(' ').map((arrHttp) => {
                if (arrHttp.substr(0,4) === 'http') return `<a href=${arrHttp}>${arrHttp}</a>`
                return arrHttp
            }).join('')
        }).join('')
    }

  return (
      <Container>
          <ChannelDesk>
              <ChannelInfo>
                  <Avatar></Avatar>
                  <h3>
                      {channelTitle}
                      <span className="follower">구독자 {thousandNumberFormat(favoriteCount)}명</span>
                  </h3>
              </ChannelInfo>
              <ChannelText control={control}>
                  <p dangerouslySetInnerHTML={{__html: descriptionChange(description)}}
                  />
                  <div className={'control'}
                       onClick={() => setControl(!control)}
                  >
                      {
                          control ? '간략히' : '더보기'
                      }
                  </div>
              </ChannelText>
          </ChannelDesk>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255,255,255,.1);
`;

const ChannelDesk = styled.div`
  flex: 1;
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 50%;
  background: #fff;
  overflow: hidden;
`;

const ChannelInfo = styled.div`
  display:flex;
  align-items: center;
  height: 50px;
  margin-bottom: 12px;
  h3 {
    font-size: 14px;
    font-weight: 500;
    .follower {
        display:block;
        font-size: 13px;
        color: #aaa;
    }
  }
`;

const ChannelText = styled.div`
    
    ${props => !props.control && 'p{max-height:60px;}'};
    margin-left: 64px;
    p {
      font-size: 14px;
      line-height: 1.4;
      white-space: pre-wrap;
      word-break: break-word;
      overflow: hidden;
      a, span {
        color: #3ea6ff;
        text-decoration: none;
        cursor: pointer;
      }
    }
    .control {
      margin-top: 8px;
      font-size: 13px;
      color: #aaa;
      cursor: pointer;
    }
`;

export default ChannelDetail;