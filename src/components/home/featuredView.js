/* eslint no-param-reassign:0 */
//  import modules
import React, { PropTypes } from 'react';

//  import styles
import styles from '../../../static/css/app.css';

const getStar = (rait) => (
    [1, 2, 3, 4, 5].map((val) => {
      if (rait > 1) {
        rait--;
        return <i className="fa fa-star" key={val}></i>;
      }
      if (rait > 0 && rait < 1) {
        rait -= rait % 1;
        return <i className="fa fa-star-half-empty" key={val}></i>;
      }
      return <i className="fa fa-star-o" key={val}></i>;
    })
);

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
          <span className={styles.name}>{props.category.title}</span>
        </div>
        <h1><a href="">{props.title}</a></h1>
        <div className={styles.itemStatistic}>
          <div className={styles.commentsCount}>
            <i className="fa fa-comments"></i>
            <span className={styles.value}>{props.comments_count}</span>
          </div>
          <div className={styles.rating}>
            {getStar(props.rating)}
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
