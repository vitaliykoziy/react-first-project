/* eslint camelcase: 0 */
import React, { Component, PropTypes } from 'react';
import styles from '../post.css';
import 'font-awesome-webpack';
import classNames from 'classnames';
import Time from 'react-time';

export class CommentView extends Component {
  getLikes({ likeStatus, unlikeStatus, like, unlike }, actions) {
    const up = classNames({
      fa: true,
      'fa-thumbs-o-up': !likeStatus,
      'fa-thumbs-up': likeStatus,
    });
    const down = classNames({
      fa: true,
      'fa-thumbs-o-down': !unlikeStatus,
      'fa-thumbs-down': unlikeStatus,
    });

    return (
      <div className={styles.likeSection}>
        <a onClick={actions.doLike} >
          <i className={up}>
            <span className={styles.value}>{like}</span>
          </i>
        </a>
        <a onClick={actions.doDislike}>
          <i className={down}>
            <span className={styles.value}>{unlike}</span>
          </i>
        </a>
      </div>
    );
  }
  render() {
    const { author, message, likes, doLike, doDislike, created_at } = this.props;
    const actions = {
      doLike: () => doLike(),
      doDislike: () => doDislike(),
    };
    return (
      <div className={styles.comment}>
        <div className={styles.commentInfo}>
          <div className={styles.author}>
            <img src={author.logo} alt="author logo" />
            <span>
              {author.first_name} {author.last_name}
            </span>
            <div className={styles.reviewDate}>
              <span>/</span>
              <Time value={created_at * 1000} format="DD MMM YYYY HH:MM" />
              <span>/</span>
            </div>
          </div>
            {this.getLikes(likes, actions)}
        </div>
        <div className={styles.message}>
          {message}
        </div>
        <div className={styles.separateLine}></div>
      </div>
    );
  }
}

CommentView.propTypes = {
  author: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.object.isRequired,
  doLike: PropTypes.func,
  doDislike: PropTypes.func,
  commentIndex: PropTypes.number,
  created_at: PropTypes.number,
};
