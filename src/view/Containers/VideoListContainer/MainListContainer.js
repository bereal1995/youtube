import React, {useEffect} from 'react';
import styled from "styled-components";
import VideoList from "../../components/Video/VideoList";
import {videoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";

function MainListContainer() {

    const {list} = useSelector(state => state.video);

    const getVideos = () => videoActions.getVideos({
        part: 'id, snippet, contentDetails, player, statistics',
        chart: 'mostPopular',
        regionCode: 'KR',
        maxResults: 5,
    })

    useEffect(() => {
        getVideos();
    },[])

  return (
      <Container>
          <VideoList
              {...list}
          />
      </Container>
  )
}
const Container = styled.div`
  padding: 0 20px;
`;


export default MainListContainer;