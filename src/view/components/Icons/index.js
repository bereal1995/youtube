import React from 'react'
import styled from "styled-components";


export const IconSettings = () => {
    return (
        <ButtonOptions className={'icon'}>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                 className="style-scope yt-icon youtube-icon">
                <g className="style-scope yt-icon">
                    <path
                        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                        className="style-scope yt-icon"/>
                </g>
            </svg>
        </ButtonOptions>
    )
}

const ButtonOptions = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    opacity: .6;
    transition: .4s;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
    svg {
      fill: #fff;
    }
`;