/* eslint react/wrap-multilines: 0 */
//  import modules
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//  import components
import { SeparateLine } from '../separateLine';
import { FeaturedView } from './featuredView';
//  import actions
import { fetchFeaturedAction } from '../../redux/actions/index';
//  import styles
import styles from '../../../static/css/app.css';

const fetchfeaturedItemsData = props => props.fetchFeaturedAction();

class FeaturedItems extends Component {
  constructor(props) {
    super(props);
    fetchfeaturedItemsData(this.props);
  }

  getItemView() {
    if (this.props.items !== []) {
      return this.props.items.map(
        (item) => {
          const filteredCategory = this.props.categories.filter(
            (category) => category.id === item.category_id
          );
          return <FeaturedView
            {...item}
            category={filteredCategory[0].title}
            key={`featured_${item.id}`}
          />;
        }
      );
    }
    return <span>LOADING ....</span>;
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
  items: PropTypes.array,
  categories: PropTypes.array,
};


export default connect(
  state => ({
    items: state.home.featuredItems,
    categories: state.categories.all,
  }),
  dispatch => bindActionCreators(
    {
      fetchFeaturedAction,
    }, dispatch)
)(FeaturedItems);
