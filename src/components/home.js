//  import modules
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//  import components
import { FullWidthAdvertising } from './fullWidthAdvertising';
import { MayLike } from './home/mayLike';
import { BarsContainer } from './home/barsContainer';
//  import actions
import { seoActions } from '../redux/actions/index';
//  import styles
import styles from '../../static/css/app.css';

const fetchSeoData = props => props.fetchSeoDataAction('home');

class Home extends Component {
  constructor(props) {
    super(props);
    fetchSeoData(this.props);
  }

  render() {
    return (
      <div className={styles.homeContent}>
        <Helmet {...this.props.seo} />
        <FullWidthAdvertising />
        <BarsContainer />
        <MayLike />
      </div>
    );
  }
}
Home.propTypes = {
  fetchSeoDataAction: PropTypes.func,
  seo: PropTypes.object,
};

export default connect(
  state => ({ seo: state.seo }),
  dispatch => bindActionCreators(
    {
      ...seoActions,
    }, dispatch)
)(Home);
