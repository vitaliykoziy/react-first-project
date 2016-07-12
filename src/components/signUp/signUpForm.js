//  import modules
import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
//  import styles
import styles from './signUp.css';

export const formName = 'signUp';

const SignUpForm = (props) => {
  const {
    fields: {
      password,
      email,
      comparePassword,
      firstName,
      lastName,
    },
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit} className={styles.signUpForm}>
      <h1>Sign Up to MyBusiness</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Enter Your email</label>
        <input
          id="email"
          type="email"
          placeholder="email"
          {...email}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Enter Your password</label>
        <input
          id="password"
          type="password"
          placeholder="password"
          {...password}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="comparePassword">Enter Your password again</label>
        <input
          id="comparePassword"
          type="password"
          placeholder="compare password"
          {...comparePassword}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="firstName">Enter Your First name</label>
        <input
          id="firstName"
          type="text"
          placeholder="First Name"
          {...firstName}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="lastName">Enter Your Last name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
          {...lastName}
        />
      </div>
      <div className={styles.loginButtonSection}>
        <button>Sign Up!</button>
      </div>
    </form>
  );
};
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
