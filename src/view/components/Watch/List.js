import React, {useEffect} from 'react';
import styled from "styled-components";
import {videoActions} from "../../../redux/ActionCreators";
import ListItem from "./ListItem";
import {useSelector} from "react-redux";

function List({snippet}) {

    useEffect(() => {
        videoActions.getActivitiesVideos({
            channelId: snippet.channelId,
            part: 'id, snippet, contentDetails',
        });
    },[])

    const activities = useSelector(state => state.video.activities);

  return (
      <Container>
          {
              activities.items.map((item,i) => <ListItem key={i} {...item}/>)
          }
      </Container>
  )
}
const Container = styled.div`
  width: 402px;
`;


export default List;