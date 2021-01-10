import React, {useEffect} from 'react';
import styled from "styled-components";
import VideoList from "../../components/Video/VideoList";
import {videoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";

function MainListContainer() {

    const {list} = useSelector(state => state.video);

    const getVideos = () => videoActions.getVideos({
        key: 'AIzaSyCyw5uVybeHQmT69RLSwGIRltYNDsodJxM',
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

`;


export default MainListContainer;