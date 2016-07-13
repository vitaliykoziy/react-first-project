/* eslint import/no-unresolved: 0 */
//  import modules
import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import FormMessages, { generateValidation } from 'redux-form-validation';
//  import styles
import styles from './login.css';

export const formName = 'login';

const validations = {
  email: {
    validateOnBlur: true,
    required: true,
    minLength: 5,
    email: true,
    promise: (fieldName, fieldValue) => (
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (fieldValue === 'test@test.com') {
            resolve();
          } else {
            reject(`The mail must be test@test.com, "${fieldValue || 'none'}" given!`);
          }
        }, 10);
      })
    ),
  },
  password: {
    required: true,
    minLength: 6,
  },
};

const LoginForm = ({
    fields: {
      password,
      email,
    },
    handleSubmit,
  }) => (
  <form onSubmit={handleSubmit} className={styles.loginForm}>
    <h1>Login to MyBusiness</h1>
    <div className={styles.inputGroup}>
      <FormMessages tagName="ol" className={styles.hasError} errorCount="2" field={email}>
        <li when="required">
          this field is required
        </li>
        <li when="email">
          please insert a valid email
        </li>
        <li when="minLength">
          this field must have at least 5 characters
        </li>
        <li when="promise">
          {email.error && email.error.promise}
        </li>
      </FormMessages>
      <label>
        <span>Enter Your email</span>
        <input type="email" placeholder="email" {...email} />
      </label>
    </div>
    <div className={styles.inputGroup}>
      <FormMessages tagName="ol" className={styles.hasError} errorCount="2" field={password}>
        <li when="required">
          this field is required
        </li>
        <li when="minLength">
          this field must have at least 6 characters
        </li>
      </FormMessages>
      <label>
        <span>Enter Your password</span>
        <input type="password" placeholder="password" {...password} />
      </label>
    </div>
    <div className={styles.loginButtonSection}>
      <button>Login!</button>
    </div>
  </form>
);
LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default reduxForm({
  form: formName,
  ...generateValidation(validations),
})(LoginForm);
