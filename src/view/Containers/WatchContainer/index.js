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
    const activities = useSelector(state => state.video.activities);
    const item = watch?.items[0];

    const videoRating = (rate) => {
        console.log('@@rate',rate);
        videoActions.postVideoRating({
            id: values.v,
            rating: rate,
        })
    }

    useEffect(() => {
        videoActions.getVideoById({
            id: values.v,
            part: 'id, snippet, contentDetails, player, statistics',
            maxResults: 1,
        });
        videoActions.getVideoComments({
            videoId: values.v,
            part: 'id, replies, snippet',
            maxResults: 5,
            order: 'relevance',
            textFormat: 'html',
            moderationStatus: 'published',
        });
    },[values.v])

    if(!item) return null;

  return (
      <Container>
          <Player source={item?.player}/>
          <ContentsContainer>
              <Left>
                  <Info {...item} videoRating={videoRating}/>
              </Left>
              <Right>
                  <List {...item} activities={activities}/>
              </Right>
          </ContentsContainer>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const ContentsContainer = styled.div`
  display:flex;
  justify-content: center;
  padding: 0 20px;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
    
`;

export default WatchContainer;