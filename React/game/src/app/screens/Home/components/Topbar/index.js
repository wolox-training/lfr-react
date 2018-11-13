import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActionCreators from '@redux/login/actions';

import Layout from './layout';

function TopBar({ logOutUser }) {
  return <Layout handleClick={logOutUser} />;
}

NavBar.propTypes = {
  logOutUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(ActionCreators.logout())
});

export default connect(
  null,
  mapDispatchToProps
)(TopBar);
