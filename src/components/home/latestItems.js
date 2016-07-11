//  import modules
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//  import actions
import { fetchLatestAction } from '../../redux/actions/index';
//  import components
import { SeparateLine } from '../separateLine';
import { LatestView } from './latestView';
// import styles
import styles from '../../../static/css/app.css';

const fetchLatestItemsData = props => props.fetchLatestAction();

class LatestItems extends Component {
  constructor(props) {
    super(props);
    fetchLatestItemsData(this.props);
  }

  getItemView() {
    const { isFetching, items } = this.props.latestItems;
    if (isFetching) {
      return <span>LOADING ....</span>;
    }
    return Object.keys(items).map(
      (key, index) =>
        <LatestView
          {...items[key]}
          number={index + 1}
          key={key}
        />
    );
  }

  render() {
    return (
      <article className={styles.latesList}>
        <header>
          <SeparateLine text="Latest" />
        </header>
        <content>
          {this.getItemView()}
        </content>
      </article>
    );
  }
}

LatestItems.propTypes = {
  fetchLatestAction: PropTypes.func,
  latestItems: PropTypes.object,
};

export default connect(
  state => ({ latestItems: state.home.latestItems }),
  dispatch => bindActionCreators(
    {
      fetchLatestAction,
    }, dispatch)
)(LatestItems);
