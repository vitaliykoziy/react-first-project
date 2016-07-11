//  import modules
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//  import components
import LatestItems from './latestItems';
import FeaturedItems from './featuredItems';
import { PopularCategories } from './popularCategories';
//  import actions
import { fetchCategoriesListAction } from '../../redux/actions/index';
//  import styles
import styles from '../../../static/css/app.css';
import 'font-awesome-webpack';

const fetchCategoriesList = props => props.fetchCategoriesListAction();
class BarsContainer extends Component {
  constructor(props) {
    super(props);
    fetchCategoriesList(this.props);
  }

  render() {
    return (
      <div className={styles.barsWraper}>
        <div className={styles.leftBar}>
          <LatestItems />
        </div>

        <div className={styles.rightBar}>
          <FeaturedItems />
          <PopularCategories />
        </div>
      </div>
    );
  }
}
BarsContainer.propTypes = {
  fetchCategoriesListAction: PropTypes.func,
  items: PropTypes.array,
};


export default connect(
  state => ({ categories: state.categories.all }),
  dispatch => bindActionCreators(
    {
      fetchCategoriesListAction,
    }, dispatch)
)(BarsContainer);
