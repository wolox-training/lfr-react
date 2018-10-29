import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Game from '@game';

import Login from '@login';

class App extends Component {
  render() {
    const isLogin = this.props.isLogin;
    const validateRoute = () => (isLogin ? <Redirect to="/game" /> : <Login />);
    return (
      <Router>
        <Switch>
          <Route exact path="/login" render={validateRoute} />
          <Route path="/game" component={Game} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  isLogin: PropTypes.bool.isRequired
};

const mapStateToProps = ({ auth }) => ({
  isLogin: auth.isLogin
});

export default connect(mapStateToProps)(App);
