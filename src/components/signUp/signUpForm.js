//  import modules
import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
//  import styles
import styles from './signUp.css';

export const formName = 'signUp';

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
  fields: [
    'password',
    'comparePassword',
    'email',
    'firstName',
    'lastName',
  ],
})(SignUpForm);
