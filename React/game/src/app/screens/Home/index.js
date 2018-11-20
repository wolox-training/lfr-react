import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Game from './screens/Game';
import TopBar from './components/Topbar';
import HistoryGame from './screens/History';

function Home() {
  return (
    <Fragment>
      <TopBar />
      <Switch>
        <Route exact path="/game" component={Game} />
        <Route exact path="/historygame" component={HistoryGame} />
      </Switch>
    </Fragment>
  );
}

export default Home;
