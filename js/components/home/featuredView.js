import React from 'react';
import styles from '../../../css/app.css';

export const FeaturedView = () => (
  <article className={styles.featuredItem}>
    <header>
      <div className={styles.leftSide}>
        <a href="">
          <img src="http://www.mybusiness.com.au/images/technology/debbie-mayo-smith.jpg" alt="empty" />
        </a>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.category}>
          <i className="fa fa-tag"></i>
          <span className={styles.name}>LEADERSHIP</span>
        </div>
        <h1><a href="">Are you wasting your time with Facebook?</a></h1>
        <div className={styles.itemStatistic}>
          <div className={styles.commentsCount}>
            <i className="fa fa-comments"></i>
            <span className={styles.value}>543</span>
          </div>
          <div className={styles.rating}>
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
