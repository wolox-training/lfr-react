import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from '@utils/formValidations';
import { nameForm } from '@constans/form';
import PropTypes from 'prop-types';

import renderField from './components/Field/index.js';
import styles from './styles.scss';

function LoginLayout(props) {
  const { handleSubmit, msgError, isLogin } = props;
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
        {!isLogin && <span>{msgError}</span>}
      </div>
    </form>
  );
}

LoginLayout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  msgError: PropTypes.string
};

export default reduxForm({ form: nameForm, validate })(LoginLayout);
