import React, { PropTypes } from 'react';
import styles from './post.css';

export const Comment = ({ author, message }) => (
  <div className={styles.comment}>
    <div className={styles.author}>{author.first_name} {author.last_name}</div>
    <div className={styles.message}>
      {message}
    </div>
    <div className={styles.separateLine}></div>
  </div>
);
Comment.propTypes = {
  author: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};
