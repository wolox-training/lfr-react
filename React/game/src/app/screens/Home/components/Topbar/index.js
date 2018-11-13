import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actionCreators from '@redux/auth/actions';

import Layout from './layout';

function TopBar({ logOutUser }) {
  return <Layout handleClick={logOutUser} />;
}

TopBar.propTypes = {
  logOutUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(actionCreators.logout())
});

export default connect(
  null,
  mapDispatchToProps
)(TopBar);
