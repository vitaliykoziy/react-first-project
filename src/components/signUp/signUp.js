//  import modules
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getValues } from 'redux-form';
//  import components
import SignUpForm, { formName } from './signUpForm';
//  import actions
import { seoActions } from '../../redux/actions/index';
//  import styles
import styles from './signUp.css';

const fetchSeoData = props => props.fetchSeoDataAction('signUp');

class SignUp extends Component {
  componentWillMount() {
    fetchSeoData(this.props);
  }

  handleSubmitSignUpForm = () => {
    const submitedData = getValues(this.props.form[formName]);
    if (!submitedData) {
      return alert('Please follow all fields');
    }
    return alert('User already exist :(');
  };
  render() {
    return (
      <div className={styles.content}>
        <Helmet {...this.props.seo} />
        <SignUpForm onSubmit={this.handleSubmitSignUpForm} />
      </div>
    );
  }
}
SignUp.propTypes = {
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
)(SignUp);
