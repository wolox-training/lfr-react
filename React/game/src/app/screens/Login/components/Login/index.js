import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/auth/actions';
import PropTypes from 'prop-types';

import LoginLayout from './layout';

function Login({ submit, isLogin, msgError }) {
  return <LoginLayout onSubmit={submit} isLogin={isLogin} msgError={msgError} />;
}

Login.propTypes = {
  submit: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  msgError: PropTypes.string
};

const mapStateToProps = ({ auth }) => ({
  isLogin: auth.isLogin,
  msgError: auth.msgError
});

const mapDispatchToProps = dispatch => ({
  submit: ({ email, password }) => dispatch(actionCreators.onLogin(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
