import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Layout({ handleClick }) {
  return (
    <nav>
      <ul>
        <li>
          {' '}
          <Link to="/Home" />
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
        <li>
          <Link to="/historygame">History</Link>
        </li>
      </ul>

      <div>
        <button onClick={handleClick} />
      </div>
    </nav>
  );
}

Layout.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Layout;
