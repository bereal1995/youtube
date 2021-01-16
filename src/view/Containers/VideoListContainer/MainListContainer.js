import React, {useEffect} from 'react';
import styled from "styled-components";
import VideoList from "../../components/Video/VideoList";
import {videoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import SideMenuSmall from "../../components/SideMenu/SideMenuSmall";

function MainListContainer() {

    const {list} = useSelector(state => state.video);
    const app = useSelector(state => state.app);

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
      <Container sidebar={app.sidebar}>
          {
              !app.sidebar && <SideMenuSmall/>
          }
          <VideoList
              {...list}
          />
      </Container>
  )
}
const Container = styled.div`
  ${props => props.sidebar ? 'margin-left:0;' : 'margin-left:72px;'}
`;


export default MainListContainer;