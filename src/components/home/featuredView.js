//  import modules
import React, { PropTypes } from 'react';

//  import styles
import styles from '../../../static/css/app.css';

export const FeaturedView = (props) => (
  <article className={styles.featuredItem}>
    <header>
      <div className={styles.leftSide}>
        <a href="">
          <img src={props.image} alt="" />
        </a>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.category}>
          <i className="fa fa-tag"></i>
          <span className={styles.name}>{props.category}</span>
        </div>
        <h1><a href="">{props.title}</a></h1>
        <div className={styles.itemStatistic}>
          <div className={styles.commentsCount}>
            <i className="fa fa-comments"></i>
            <span className={styles.value}>{props.comments_count}</span>
          </div>
          <div className={styles.rating}>
            {props.rating}
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-empty"></i>
            <i className="fa fa-star-o"></i>
          </div>
        </div>
      </div>
    </header>
  </article>
);

FeaturedView.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  comments_count: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};
