import React, { Component, PropTypes } from 'react';
import styles from './post.css';
import 'font-awesome-webpack';

export class Comment extends Component {
  getLikes({ likeStatus, like, unlike }, actions) {
    if (likeStatus === 0) {
      return (
        <div className={styles.likeSection}>
          <i onClick={actions.doLike} className="fa fa-thumbs-o-up">
            <span className={styles.value}>{like}</span>
          </i>
          <i onClick={actions.doDislike} className="fa fa-thumbs-o-down">
            <span className={styles.value}>{unlike}</span>
          </i>
        </div>
      );
    }
    if (likeStatus === 1) {
      return (
        <div className={styles.likeSection}>
          <i onClick={actions.doLike} className="fa fa-thumbs-up">
            <span className={styles.value}>{like}</span>
          </i>
          <i onClick={actions.doDislike} className="fa fa-thumbs-o-down">
            <span className={styles.value}>{unlike}</span>
          </i>
        </div>
      );
    }

    return (
      <div className={styles.likeSection}>
        <i onClick={actions.doLike} className="fa fa-thumbs-o-up">
          <span className={styles.value}>{like}</span>
        </i>
        <i onClick={actions.doDislike} className="fa fa-thumbs-down">
          <span className={styles.value}>{unlike}</span>
        </i>
      </div>
    );
  }
  render() {
    const { author, message, likes, doLike, doDislike } = this.props;
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

Comment.propTypes = {
  author: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.object.isRequired,
  doLike: PropTypes.func,
  doDislike: PropTypes.func,
  commentIndex: PropTypes.number,
};
