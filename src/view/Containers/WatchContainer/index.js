import React, {useEffect} from 'react';
import styled from "styled-components";
import qs from "qs";
import {videoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import Player from "../../components/Player";
import Info from "../../components/Watch/Info";
import RelatedList from "../../components/Watch/RelatedList";
import ListSkeleton from "../../components/Skeleton/ListSkeleton";

function WatchContainer({location}) {
    
    const values = qs.parse(location.search,{ignoreQueryPrefix: true});
    const {loaded} = useSelector(state => state.auth);

    const {watch} = useSelector(state => state.video);
    const activities = useSelector(state => state.video.activities);
    const item = watch?.items[0];

    const videoRating = (rate) => {
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
            maxResults: 20,
            order: 'relevance',
            textFormat: 'html',
            moderationStatus: 'published',
        });
    },[values.v])

    if(!item) return null;
    if(!loaded) return <ListSkeleton/>

  return (
      <Container>
          <ContentsContainer>
              <Left>
                  <Player source={item?.player}/>
                  <Info {...item} videoRating={videoRating}/>
              </Left>
              <Right>
                  <RelatedList {...item} activities={activities}/>
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
  padding: 24px 20px;
`;

const Left = styled.div`
  display:flex;
  flex-direction: column;
`;

const Right = styled.div`
  padding: 0 24px;  
`;

export default WatchContainer;