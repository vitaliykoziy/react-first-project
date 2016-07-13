/* eslint react/wrap-multilines: 0 */
//  import modules
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//  import components
import { SeparateLine } from '../common/separateLine';
import { FeaturedView } from './featuredView';
//  import actions
import { fetchFeaturedAction } from '../../redux/actions/index';
//  import styles
import styles from './home.css';

const fetchfeaturedItemsData = props => props.fetchFeaturedAction();

class FeaturedItems extends Component {
  componentWillMount() {
    fetchfeaturedItemsData(this.props);
  }

  getItemView() {
    const { isFetching, items } = this.props.featuredItems;
    if (isFetching) {
      return <span>LOADING ....</span>;
    }
    return Object.keys(items).map(
      (key) =>
        <FeaturedView
          {...items[key]}
          key={key}
        />
    );
  }

  render() {
    return (
      <article className={styles.featuredList}>
        <header>
          <SeparateLine text="Featured" />
        </header>
        <content>
          {this.getItemView()}
        </content>
      </article>
    );
  }
}

FeaturedItems.propTypes = {
  fetchFeaturedAction: PropTypes.func,
  featuredItems: PropTypes.object,
};


export default connect(
  state => ({
    featuredItems: state.home.featuredItems,
  }),
  dispatch => bindActionCreators(
    {
      fetchFeaturedAction,
    }, dispatch)
)(FeaturedItems);
