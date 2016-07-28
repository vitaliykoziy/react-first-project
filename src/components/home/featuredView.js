//  import modules
import React, { PropTypes } from 'react';
//  import utils
import { Rating } from '../common/rating';
//  import styles
import styles from './home.css';

export const FeaturedView = (props) => (
  <article className={styles.featuredItem}>
    <header className={styles.row}>
      <div className={`${styles.col_3} ${styles.leftSide}`}>
        <a href="">
          <img src={props.image} alt="" />
        </a>
      </div>
      <div className={`${styles.col_7} ${styles.rightSide}`}>
        <div className={styles.category}>
          <i className="fa fa-tag"></i>
          <span className={styles.name}>{props.category.title}</span>
        </div>
        <h1><a href="">{props.title}</a></h1>
        <div className={`${styles.itemStatistic} ${styles.row}`}>
          <div className={` ${styles.commentsCount} ${styles.col_5}`}>
            <i className="fa fa-comments"></i>
            <span className={styles.value}>{props.comments_count}</span>
          </div>
          <div className={styles.col_5}>
            <Rating rating={props.rating} />
          </div>
        </div>
      </div>
    </header>
  </article>
);

FeaturedView.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired,
  comments_count: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};
