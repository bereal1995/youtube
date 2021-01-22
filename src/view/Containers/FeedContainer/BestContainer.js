import React, {useEffect} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {videoActions} from "../../../redux/ActionCreators";
import List from "../../components/Common/List";

function BestContainer() {

    const {popular} = useSelector(state => state.video);

    useEffect(() => {
        videoActions.getPopularVideos({
            part: 'id,snippet',
            chart: 'mostPopular',
            maxResults: 5,
            regionCode: 'KR',
        })
    },[])

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