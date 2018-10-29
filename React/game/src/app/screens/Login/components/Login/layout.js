import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './styles.scss';

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'invalid Password';
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={styles.info} />
      {touched &&
        ((error && <label className={styles.error}>{error}</label>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

function LoginLayout(props) {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.login}>
        <label className={styles.info}>First Name</label>
        <Field name="username" component={renderField} type="text" placeholder="username" />
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
