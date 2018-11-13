import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actionCreators from '@redux/auth/actions';

import LoginLayout from './layout';

function Login({ submit, errorLogin, msgError }) {
  return <LoginLayout onSubmit={submit} errorLogin={errorLogin} msgError={msgError} />;
}

Login.propTypes = {
  submit: PropTypes.func.isRequired,
  errorLogin: PropTypes.bool,
  msgError: PropTypes.string
};

const mapStateToProps = state => ({
  errorLogin: state.auth.errorLogin,
  msgError: state.auth.msgError
});

const mapDispatchToProps = dispatch => ({
  submit: ({ email, password }) => dispatch(actionCreators.onLogin(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
