import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import VideoList from "../../components/Video/VideoList";
import {videoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import MainSkeleton from "../../components/Skeleton/MainSkeleton";
import {SentinelCommon} from "../../../styled/Common.Styled";
import {createObserver} from "../../../lib/Common";

function MainListContainer() {

    const {list} = useSelector(state => state.video);
    const {loaded} = useSelector(state => state.app);
    const sentinelRef = useRef();
    const location = useLocation()

    const getVideos = () => videoActions.getVideos({
        part: 'id, snippet, contentDetails, player, statistics',
        chart: 'mostPopular',
        regionCode: 'KR',
        maxResults: 40,
    })

    useEffect(() => {
        getVideos();
    },[location])

    useEffect(() => {
        if (sentinelRef.current) {
            createObserver(sentinelRef.current, () => {
                videoActions.getVideosMore({
                    part: 'id, snippet, contentDetails, player, statistics',
                    chart: 'mostPopular',
                    regionCode: 'KR',
                    maxResults: 10,
                })
            })
        }
    },[])

    // if (!loaded) return <MainSkeleton/>

  return (
      <Container>
          <VideoList {...list}/>
          <Sentinel ref={sentinelRef}/>
      </Container>
  )
}
const Container = styled.div`
  position: relative;
  padding: 0 20px;
`;

const Sentinel = styled(SentinelCommon)`
    
`;

export default MainListContainer;