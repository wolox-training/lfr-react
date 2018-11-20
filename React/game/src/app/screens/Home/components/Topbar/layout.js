import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.scss';

function Layout({ handleClick }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <button className={styles.list}>
          <Link to="/game" className={styles.link}>
            Game
          </Link>
        </button>
        <button className={styles.list}>
          <Link to="/historygame" className={styles.link}>
            History
          </Link>
        </button>
      </div>
      <div>
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </nav>
  );
}
Layout.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Layout;
