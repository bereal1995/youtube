import React from 'react';
import styled from "styled-components";

function Search() {

  return (
      <Container>
          <Label>
            <input type="text"/>
          </Label>
          <ButtonSearch>
              <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
                   className="youtube-icon">
                  <g className="style-scope yt-icon">
                      <path
                          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                          className="style-scope yt-icon"/>
                  </g>
              </svg>
          </ButtonSearch>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  max-width: 670px;  
`;

const Label = styled.label`
  width: 575px;
  height: 30px;
  background: #111;
  border: 1px solid #303030;
  padding-right: 50px;
  input {
    background: transparent;
    border: 0;
    color: #fff;
    display:block;
    width: 100%;
    height: 100%;
    padding: 8px;
    font-size: 16px;
    &:focus {
      outline: 0;
    }
  }
`;

const ButtonSearch = styled.button`
  width: 65px;
  height: 30px;
  display:flex;
  align-items: center;
  justify-content: center;
  border:none;
  background: rgba(255,255,255,.1);
  cursor: pointer;
  &:hover {
    svg {
      opacity: 1;
    }
  }
  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
    opacity: .6;
    transition: .4s;
  }
`;


export default Search;