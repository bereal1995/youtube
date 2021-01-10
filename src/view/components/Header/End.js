import React from 'react';
import styled from "styled-components";
import {IconSettings} from "../Icons";

function End() {

  return (
      <Container>
          <ButtonYoutubeApp>
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                   className="style-scope yt-icon youtube-icon">
                  <g className="style-scope yt-icon">
                      <path
                          d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
                          className="style-scope yt-icon"/>
                  </g>
              </svg>
          </ButtonYoutubeApp>
          <ButtonSetting>
              <IconSettings/>
          </ButtonSetting>
          <ButtonSignIn>
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                   className="style-scope yt-icon youtube-icon">
                  <g className="style-scope yt-icon">
                      <path
                          d="M12,0 C18.62375,0 24,5.37625 24,12 C24,18.62375 18.62375,24 12,24 C5.37625,24 0,18.62375 0,12 C0,5.37625 5.37625,0 12,0 Z M12,10.63625 C13.66,10.63625 15,9.29625 15,7.63625 C15,5.97625 13.66,4.63625 12,4.63625 C10.34,4.63625 9,5.97625 9,7.63625 C9,9.29625 10.34,10.63625 12,10.63625 Z M12,12.40875 C8.33375,12.40875 5.455,14.18125 5.455,15.8175 C6.84125,17.95 9.26875,19.3625 12,19.3625 C14.73125,19.3625 17.15875,17.95 18.545,15.8175 C18.545,14.18125 15.66625,12.40875 12,12.40875 Z"
                          className="style-scope yt-icon"/>
                  </g>
              </svg>
              로그인
          </ButtonSignIn>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  align-items: center;
`;

const ButtonYoutubeApp = styled.div`
  padding: 8px;
  cursor: pointer;
  svg {
      width: 24px;
      height: 24px;
      fill: #fff;
  }  
`;

const ButtonSetting = styled.div`
  padding: 8px;
  margin-left: 8px;
  cursor: pointer;
  svg {
      width: 24px;
      height: 24px;
      fill: #fff;
  }
`;

const ButtonSignIn = styled.div`
  display:flex;
  align-items: center;  
  justify-content: center;
  width: 92px;
  height: 40px;
  margin-left: 8px;
  color: #32a6ff;
  border: 1px solid #32a6ff;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  svg {
      width: 24px;
      height: 24px;
      fill: #32a6ff;
      margin-right: 8px;
  }
`;


export default End;