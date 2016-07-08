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

class LatestItems extends Component {
  constructor(props) {
    super(props);
    fetchLatestItemsData(this.props);
  }

  getItemView() {
    if (this.props.items !== []) {
      return this.props.items.map(
        (item, index) => <LatestView
          {...item}
          number={index + 1}
          key={`latest_${item.id}`}
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
  items: PropTypes.array,
};

export default connect(
  state => ({ items: state.home.latestItems }),
  dispatch => bindActionCreators(
    {
      ...homeActions,
    }, dispatch)
)(LatestItems);
