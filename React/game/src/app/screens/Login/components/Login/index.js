import React, { Component } from 'react';

import styles from './styles.scss';

class Login extends Component {
  render() {
    return (
      <form>
        <div className={styles.login}>
          <div>
            <label>First Name</label>
            <input
              className={styles.info}
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className={styles.info}
              name="password"
              component="input"
              type="password"
              placeholder="*****"
            />
          </div>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

// Square.propTypes = {};

export default Login;
