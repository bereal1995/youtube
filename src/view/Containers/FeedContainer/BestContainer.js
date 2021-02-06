import React, {useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {videoActions} from "../../../redux/ActionCreators";
import {useLocation} from 'react-router-dom';
import List from "../../components/Common/List";
import ListSkeleton from "../../components/Skeleton/ListSkeleton";

function BestContainer() {

    const {popular} = useSelector(state => state.video);
    const {loaded} = useSelector(state => state.app);
    const location = useLocation();

    useEffect(() => {
        videoActions.getPopularVideos({
            part: 'id,snippet',
            chart: 'mostPopular',
            maxResults: 20,
            regionCode: 'KR',
        })
    },[location])

    if (!loaded) return <ListSkeleton/>

  return (
      <Container>
          <List list={popular}/>
      </Container>
  )
}
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;


export default BestContainer;