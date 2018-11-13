import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ValidateRouter extends PureComponent {
  renderRoute = props => {
    const { isPrivate, component: Component, isLogin } = this.props;
    if (isLogin && !isPrivate) {
      return <Redirect to="/home" />;
    } else if (!isLogin && isPrivate) {
      return <Redirect to="/login" />;
    }
    return <Component {...props} />;
  };

  render() {
    const { isPrivate, component: Component, ...rest } = this.props;
    return <Route {...rest} render={this.renderRoute} />;
  }
}

ValidateRouter.propTypes = {
  isLogin: PropTypes.bool
};

const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
  userId: state.auth.userId
});

export default connect(mapStateToProps)(ValidateRouter);
