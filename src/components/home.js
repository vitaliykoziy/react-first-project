import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FullWidthAdvertising } from './fullWidthAdvertising';
import { MayLike } from './home/mayLike';
import { BarsContainer } from './home/barsContainer';
import { seoActions } from '../redux/actions/index';
import styles from '../../static/css/app.css';

const fetchSeoData = (props) => (props.fetchSeoDataAction);

class Home extends Component {
  constructor(props) {
    super(props);
    fetchSeoData(this.props);
  }

  render() {
    return (
      <div className={styles.homeContent}>
        <Helmet
          title="Home"
          meta={
            [
              {
                name: 'description',
                content: 'Home Helmet application',
              },
              {
                property: 'og:type',
                content: 'home article',
              },
            ]
          }
        />
        <button onClick={fetchSeoData(this.props)} className={styles.mrl10}>TESTSTSTS</button>
        <FullWidthAdvertising />
        <BarsContainer />
        <MayLike />
      </div>
    );
  }
}
Home.propTypes = {
  fetchSeoDataAction: PropTypes.func,
};

export default connect(
  state => ({ seo: state.seo }),
  dispatch => bindActionCreators(
    {
      ...seoActions,
    }, dispatch)
)(Home);
