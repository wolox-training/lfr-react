import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '@redux/auth/actions';
import PropTypes from 'prop-types';

import LoginLayout from './layout';

function Login({ submit, hasError }) {
  return <LoginLayout onSubmit={submit} hasError={hasError} />;
}

Login.propTypes = {
  submit: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired
};

const mapStateToProps = ({ auth }) => ({
  hasError: auth.hasError
});

const mapDispatchToProps = dispatch => ({
  submit: () => dispatch(actionCreators.onLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
