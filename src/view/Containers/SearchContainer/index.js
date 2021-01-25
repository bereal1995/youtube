import React, {useEffect} from 'react';
import styled from "styled-components";
import {useLocation} from 'react-router-dom'
import qs from 'qs'
import {searchActions} from "../../../redux/ActionCreators";
import List from "../../components/Common/List";
import {useSelector} from "react-redux";
import ListSkeleton from "../../components/Skeleton/ListSkeleton";

function SearchContainer() {

    const location = useLocation();
    const {loaded} = useSelector(state => state.app);

    const {search_query} = qs.parse(location.search,{ ignoreQueryPrefix: true});
    const {list} = useSelector(state => state.search);

    useEffect(() => {
        searchActions.searchVideos({
            part: 'id,snippet',
            q: search_query,
            type: 'video',
        })
    },[search_query])

    if (!loaded) return <ListSkeleton/>

  return (
      <Container>
          <List list={list}/>
      </Container>
  )
}
const Container = styled.div`

`;


export default SearchContainer;