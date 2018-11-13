import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import actionCreators from '@redux/auth/actions';

import Game from '../../screens/Game';
import Login from '../../screens/Login/components/Login';
import ValidateRoute from '../authRoute';

class App extends Component {
  componentDidMount() {
    const { loadingApp } = this.props;
    loadingApp();
  }

  render() {
    return (
      <Router>
        <Switch>
          <ValidateRoute exact path="/login" component={Login} />
          <ValidateRoute path="/game" isPrivate component={Game} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  loadingApp: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  loadingApp: () => dispatch(actionCreators.loadingApp())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
