import React from 'react';
import Best from "./Best";
import Library from "./Library";
import Subscriptions from "./Subscriptions";
import History from "./History";
import {Switch, Route} from "react-router-dom";

function Feed() {

  return (
      <Switch>
          <Route path={'/feed/best'} component={Best}/>
          <Route path={'/feed/library'} component={Library}/>
          <Route path={'/feed/subscriptions'} component={Subscriptions}/>
          <Route path={'/feed/history'} component={History}/>
      </Switch>
  )
}

export default Feed;