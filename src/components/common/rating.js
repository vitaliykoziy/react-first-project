/* eslint no-param-reassign:0 */
import React, { PropTypes } from 'react';
import 'font-awesome-webpack';
import styles from './rating.css';
const getRatingView = (rating, starsCount) => (
  [...Array(starsCount + 1).keys()].filter(i => i >= 1).map((val) => {
    if (rating >= 1) {
      rating--;
      return <i className="fa fa-star" key={val}></i>;
    }
    if (rating > 0 && rating < 1) {
      rating -= rating % 1;
      return <i className="fa fa-star-half-empty" key={val}></i>;
    }
    return <i className="fa fa-star-o" key={val}></i>;
  })
);

export const Rating = (props) => (
  <div className={styles.rating}>
    {getRatingView(props.rating, props.starsCount)}
  </div>
);
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  starsCount: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
  starsCount: 5,
};
