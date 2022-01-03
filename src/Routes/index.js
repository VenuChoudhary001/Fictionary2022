import React from 'react'
import { Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import Landing from '../Pages/Landing';
import Leaderboard from '../Pages/Leaderboard';
const ROUTES = () => {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/leaderboard">
        <Leaderboard/>
          </Route>
        </Switch>
      </>
    );
}

export default ROUTES
