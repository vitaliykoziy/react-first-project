//  import modules
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//  import components
import { FullWidthAdvertising } from './fullWidthAdvertising';
import { MayLike } from './mayLike';
import { BarsContainer } from './barsContainer';
//  import actions
import { seoActions } from '../../redux/actions/index';
//  import styles
import styles from './home.css';

const fetchSeoData = props => props.fetchSeoDataAction('home');

class Home extends Component {
  componentWillMount() {
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
