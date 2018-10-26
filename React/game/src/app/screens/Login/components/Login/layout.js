import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './styles.scss';

function LoginLayout(props) {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.login}>
        <div>
          <label>First Name</label>
          <Field
            className={styles.info}
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div>
          <label>Password</label>
          <Field
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

export default reduxForm({ form: 'loginForm' })(LoginLayout);
