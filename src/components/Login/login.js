//  import modules
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//  import actions
import { seoActions } from '../../redux/actions/index';
//  import styles
import styles from '../../../static/css/_app.css';

const fetchSeoData = props => props.fetchSeoDataAction('login');

class Login extends Component {
  constructor(props) {
    super(props);
    fetchSeoData(this.props);
  }

  render() {
    return (
      <div className={styles.homeContent}>
        <Helmet {...this.props.seo} />
        <form className="loginForm">
          <div className="inputGroup">
            <label htmlFor="email">Enter Your email</label>
            <input id="email" type="email" />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Enter Your password</label>
            <input id="password" type="password" />
          </div>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  fetchSeoDataAction: PropTypes.func,
  seo: PropTypes.object,
};

export default connect(
  state => ({ seo: state.seo }),
  dispatch => bindActionCreators(
    {
      ...seoActions,
    }, dispatch)
)(Login);
