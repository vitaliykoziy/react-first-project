//  import modules
import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import FormMessages, { generateValidation } from 'redux-form-validation';
//  import styles
import styles from './signUp.css';

export const formName = 'signUp';

const validations = {
  email: {
    validateOnBlur: true,
    required: true,
    minLength: 5,
    email: true,
  },
  password: {
    required: true,
    minLength: 6,
  },
  comparePassword: {
    required: true,
    matchField: 'password',
  },
  firstName: {
    required: true,
    minLength: 6,
  },
  lastName: {
    required: true,
    minLength: 6,
  },

};

const SignUpForm = ({
    fields: {
      password,
      email,
      comparePassword,
      firstName,
      lastName,
    },
    handleSubmit,
  }) => (
  <form onSubmit={handleSubmit} className={styles.signUpForm}>
    <h1>Sign Up to MyBusiness</h1>
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
      </FormMessages>
      <label>
        <span>Enter Your email</span>
        <input
          type="email"
          placeholder="email"
          {...email}
        />
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
        <input
          type="password"
          placeholder="password"
          {...password}
        />
      </label>
    </div>
    <div className={styles.inputGroup}>
      <FormMessages tagName="ol" className={styles.hasError} errorCount="2" field={comparePassword}>
        <li when="required">
          this field is required
        </li>
        <li when="matchField">
          is different than password, should be same
        </li>
      </FormMessages>
      <label>
        <span>Enter Your password again</span>
        <input
          type="password"
          placeholder="compare password"
          {...comparePassword}
        />
      </label>
    </div>
    <div className={styles.inputGroup}>
      <FormMessages tagName="ol" className={styles.hasError} errorCount="2" field={firstName}>
        <li when="required">
          this field is required
        </li>
        <li when="minLength">
          this field must have at least 6 characters
        </li>
      </FormMessages>
      <label>
        <span>Enter Your First name</span>
        <input
          type="text"
          placeholder="First Name"
          {...firstName}
        />
      </label>
    </div>
    <div className={styles.inputGroup}>
      <FormMessages tagName="ol" className={styles.hasError} errorCount="2" field={lastName}>
        <li when="required">
          this field is required
        </li>
        <li when="minLength">
          this field must have at least 6 characters
        </li>
      </FormMessages>
      <label>
        <span>Enter Your Last name</span>
        <input
          type="text"
          placeholder="Last Name"
          {...lastName}
        />
      </label>
    </div>
    <div className={styles.loginButtonSection}>
      <button>Sign Up!</button>
    </div>
  </form>
);
SignUpForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default reduxForm({
  form: formName,
  ...generateValidation(validations),
})(SignUpForm);
