import React, {useEffect} from 'react';
import styled from "styled-components";
import qs from "qs";
import {videoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import Player from "../../components/Player";
import Info from "../../components/Watch/Info";
import List from "../../components/Watch/List";

function WatchContainer({location}) {
    
    console.log('@@location',location);

    const values = qs.parse(location.search,{ignoreQueryPrefix: true});

    const {watch} = useSelector(state => state.video);
    const item = watch.items[0];

    useEffect(() => {
        videoActions.getVideoById({
            id: values.v,
            key: 'AIzaSyCyw5uVybeHQmT69RLSwGIRltYNDsodJxM',
            part: 'id, snippet, contentDetails, player, statistics',
            maxResults: 2,
        })
    },[])

    if(!item) return null;
  return (
      <Container>
          <Player source={item?.player}/>
          <Left>
              <Info {...item}/>
          </Left>
          <Right>
              <List/>
          </Right>
      </Container>
  )
}
const Container = styled.div`

`;

const Left = styled.div`
    
`;

const Right = styled.div`
    
`;

export default WatchContainer;