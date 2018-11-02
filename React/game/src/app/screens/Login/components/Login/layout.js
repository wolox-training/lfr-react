import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from '@utils/formValidations';

import renderField from './components/Field/index.js';
import styles from './styles.scss';

function LoginLayout(props) {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.login}>
        <label className={styles.info}>E-Mail</label>
        <Field name="email" component={renderField} type="text" placeholder="email" />
        <label className={styles.info}>Password</label>
        <Field name="password" component={renderField} type="password" placeholder="*****" />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default reduxForm({ form: 'loginForm', validate })(LoginLayout);
