import React, {useEffect} from 'react';
import styled from "styled-components";
import VideoList from "../../components/Video/VideoList";
import {videoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import MainSkeleton from "../../components/Skeleton/MainSkeleton";

function MainListContainer() {

    const {list} = useSelector(state => state.video);
    const {loaded} = useSelector(state => state.app);
    const location = useLocation()

    const getVideos = () => videoActions.getVideos({
        part: 'id, snippet, contentDetails, player, statistics',
        chart: 'mostPopular',
        regionCode: 'KR',
        maxResults: 5,
    })

    useEffect(() => {
        getVideos();
    },[location])

    if (!loaded) return <MainSkeleton/>

  return (
      <Container>
          <VideoList
              {...list}
          />
      </Container>
  )
}
const Container = styled.div`
  position: relative;
  padding: 0 20px;
`;


export default MainListContainer;