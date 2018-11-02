import React from 'react';

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

export default renderField;
