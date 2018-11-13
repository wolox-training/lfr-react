import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorPage from '@screens/ErrorPage';

import Game from './screens/Game';
import Profile from './screens/Profile';
import TopBar from './components/NavBar';

function Home() {
  return (
    <Fragment>
      <TopBar />
      <Switch>
        <Route exact path="/game" component={Game} />
        <Route exact path="/history" component={HisyoryGame} />
      </Switch>
    </Fragment>
  );
}

export default Home;
