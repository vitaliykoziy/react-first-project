//  import modules
import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
//  import styles
import styles from './login.css';

export const formName = 'login';

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
      <label>
        <span>Enter Your email</span>
        <input type="email" placeholder="email" {...email} />
      </label>
    </div>
    <div className={styles.inputGroup}>
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
  fields: [
    'password',
    'email',
  ],
})(LoginForm);
