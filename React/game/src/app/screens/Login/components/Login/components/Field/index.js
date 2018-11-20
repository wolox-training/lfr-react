import React from 'react';

import styles from './styles.scss';

const renderField = ({ input, label, type, meta: { touched, error, warning }, htmlFor }) => (
  <div>
    <label htmlFor={htmlFor}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={styles.info} />
      {touched &&
        ((error && (
          <label htmlFor={htmlFor} className={styles.error}>
            {error}
          </label>
        )) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export default renderField;
