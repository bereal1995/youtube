import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {useAuth} from "../../../hooks/useAuth";

function MyMenu() {

    const {signOut} = useAuth();
    const {profileObj} = useSelector(state => state.auth);

  return (
      <Container>
          <Info>
              <Avatar>
                  <img src={profileObj.imageUrl} alt="프로필 이미지"/>
              </Avatar>
              <Text>
                  <p>{profileObj.name}</p>
                  <p>{profileObj.email}</p>
                  <MyId href={'https://myaccount.google.com'}>Google 계정 관리</MyId>
              </Text>
          </Info>
          <ul>
              <MenuItem>
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                       className="style-scope yt-icon youtube-icon">
                      <g className="style-scope yt-icon">
                          <path
                              d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"
                              className="style-scope yt-icon"/>
                          <path d="M0 0h24v24H0z" fill="none" className="style-scope yt-icon"/>
                      </g>
                  </svg>
                  내 채널
              </MenuItem>
              <MenuItem>
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                       className="style-scope yt-icon youtube-icon">
                      <g className="style-scope yt-icon">
                          <path
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"
                              className="style-scope yt-icon"/>
                          <path fill="none" d="M0 0h24v24H0z" className="style-scope yt-icon"/>
                      </g>
                  </svg>
                  구매 항목 및 멤버쉽
              </MenuItem>
              <MenuItem>
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                       className="style-scope yt-icon youtube-icon">
                      <g className="style-scope yt-icon">
                          <path
                              d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM10 15V9l5 3-5 3z"
                              className="style-scope yt-icon"/>
                      </g>
                  </svg>
                  YouTube 스튜디오
              </MenuItem>
              <MenuItem>
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                       className="style-scope yt-icon youtube-icon">
                      <g className="style-scope yt-icon youtube-icon">
                          <path
                              d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12zm-3 5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm-9 8v1h12v-1c0-2-4-3.1-6-3.1S8 13 8 15z"
                              className="style-scope yt-icon"/>
                      </g>
                  </svg>
                  계정 전환
              </MenuItem>
              <MenuItem onClick={() => signOut()}>
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                       className="style-scope yt-icon youtube-icon">
                      <g mirror-in-rtl="" className="style-scope yt-icon youtube-icon">
                          <path
                              d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                              className="style-scope yt-icon"/>
                      </g>
                  </svg>
                  로그아웃
              </MenuItem>
          </ul>
      </Container>
  )
}
const Container = styled.div`
  position: absolute;
  right: 0;
  max-width: 300px;
  width: 300px;
  margin-top: 10px;
  background: rgba(33,33,33,.98);
  border: 1px solid rgba(255,255,255,.1);
  font-size: 14px;
`;

const Info = styled.div`
  display:flex;
  padding: 16px;
  line-height: 1.3;
  border-bottom: 1px solid rgba(255,255,255,.1);
`;

const Text = styled.div`
  color: #fff;
`;

const MyId = styled.a`
  display: block;
  margin-top: 8px;
  color: #3ea6ff;
  text-decoration: none;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

const MenuItem = styled.div`
  display:flex;
  align-items: center;
  height: 40px;
  padding: 0 36px 0 16px;
  color: #aaa;
  cursor: pointer;
  &:hover {
    background: rgba(255,255,255,.1);
  }
  svg {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    fill: #aaa;
  }    
`;


export default MyMenu;