import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/auth/actions';
import PropTypes from 'prop-types';

import LoginLayout from './layout';

function Login({ submit, isLogin, isErrorAuth, msgError }) {
  return <LoginLayout onSubmit={submit} hasError={isLogin} isErrorAuth={isErrorAuth} msgError={msgError} />;
}

Login.propTypes = {
  submit: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  isErrorAuth: PropTypes.bool.isRequired,
  msgError: PropTypes.string.isRequired
};

const mapStateToProps = ({ auth }) => ({
  isLogin: auth.isLogin,
  isErrorAuth: auth.isErrorAuth,
  msgError: auth.msgError
});

const mapDispatchToProps = dispatch => ({
  submit: ({ email, password }) => dispatch(actionCreators.onLogin(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
