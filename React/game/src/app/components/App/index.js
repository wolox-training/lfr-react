import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Game from '../../screens/Game/index';
import Login from '../../screens/Login/components/Login/index';

class App extends Component {
  render() {
    const isLogin = this.props.isLogin;
    const userId = this.props.userId;
    const validateRoute = props => {
      const pathName = props.location.pathname;
      if (isLogin && userId === 1) {
        return <Game />;
      } else if (!isLogin && pathName != '/login') {
        return <Login />;
      }
      return <Login />;
    };
    return (
      <Router>
        <Switch>
          <Route path="/login" render={validateRoute} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  isLogin: PropTypes.bool.isRequired
};

const mapStateToProps = ({ auth }) => ({
  isLogin: auth.isLogin,
  userId: auth.userId
});

export default connect(mapStateToProps)(App);
