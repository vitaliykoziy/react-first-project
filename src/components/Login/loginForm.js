//  import modules
import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
//  import styles
import styles from './login.css';

export const formName = 'login';

const LoginForm = (props) => {
  const { fields: { password, email }, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h1>Login to MyBusiness</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Enter Your email</label>
        <input id="email" type="email" placeholder="email" {...email} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Enter Your password</label>
        <input id="password" type="password" placeholder="password" {...password} />
      </div>
      <div className={styles.loginButtonSection}>
        <button>Login!</button>
      </div>
    </form>
  );
};
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
