import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/auth/actions';
import PropTypes from 'prop-types';

import LoginLayout from './layout';

function Login({ submit, isLogin }) {
  return <LoginLayout onSubmit={submit} hasError={isLogin} />;
}

Login.propTypes = {
  submit: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired
};

const mapStateToProps = ({ auth }) => ({
  isLogin: auth.isLogin
});

const mapDispatchToProps = dispatch => ({
  submit: () => dispatch(actionCreators.onLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
