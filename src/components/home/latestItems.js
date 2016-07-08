//  import modules
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//  import actions
import { homeActions } from '../../redux/actions/index';
//  import components
import { SeparateLine } from '../separateLine';
import { LatestView } from './latestView';
// import styles
import styles from '../../../static/css/app.css';

const fetchLatestItemsData = props => props.fetchLatestAction();
const getItemKey = (name, uid) => name + uid;

class LatestItems extends Component {
  constructor(props) {
    super(props);
    fetchLatestItemsData(this.props);
  }

  getItemView() {
    if (this.props.latestItemsData !== []) {
      return this.props.latestItemsData.map(
        (item, index) => <LatestView
          {...item}
          number={index + 1}
          key={getItemKey('latest_', item.id)}
        />
      );
    }
    return <span>LOADING ....</span>;
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
  latestItemsData: PropTypes.array,
};

export default connect(
  state => ({ latestItemsData: state.latestItemsData }),
  dispatch => bindActionCreators(
    {
      ...homeActions,
    }, dispatch)
)(LatestItems);
