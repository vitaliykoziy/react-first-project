//  import modules
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getValues } from 'redux-form';
//  import components
import LoginForm, { formName } from './loginForm';
//  import actions
import { seoActions } from '../../redux/actions/index';
//  import styles
import styles from './login.css';

const fetchSeoData = props => props.fetchSeoDataAction('login');

class Login extends Component {
  componentWillMount() {
    fetchSeoData(this.props);
  }

  handleSubmitLoginForm = () => {
    const submitedData = getValues(this.props.form[formName]);
    if (!submitedData) {
      return alert('Please follow all fields');
    }
    if (submitedData.email === 'test@test.com' && submitedData.password === 'demo123') {
      return alert('Success!');
    }
    return alert('User not found');
  };
  render() {
    return (
      <div className={styles.content}>
        <Helmet {...this.props.seo} />
        <small>test@test.com | demo123</small>
        <LoginForm onSubmit={() => this.handleSubmitLoginForm()} />
      </div>
    );
  }
}
Login.propTypes = {
  fetchSeoDataAction: PropTypes.func,
  seo: PropTypes.object,
  form: PropTypes.object,
};
export default connect(
  state => ({
    seo: state.seo,
    form: state.form,
  }),
  dispatch => bindActionCreators(
    {
      ...seoActions,
    }, dispatch)
)(Login);
