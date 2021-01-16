import React, {useEffect} from 'react';
import styled from "styled-components";
import {useLocation} from 'react-router-dom'
import qs from 'qs'
import {searchActions} from "../../../redux/ActionCreators";
import List from "../../components/Search/List";
import {useSelector} from "react-redux";

function SearchContainer() {

    const location = useLocation();

    const {search_query} = qs.parse(location.search,{ ignoreQueryPrefix: true});
    const {list} = useSelector(state => state.search);

    console.log('@@search_query',search_query);
    console.log('@@location',location);

    useEffect(() => {
        searchActions.searchVideos({
            part: 'id,snippet',
            q: search_query,
            type: 'video',
        })
    },[search_query])

  return (
      <Container>
          <List list={list}/>
      </Container>
  )
}
const Container = styled.div`

`;


export default SearchContainer;