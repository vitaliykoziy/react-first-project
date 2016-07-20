//  import modules
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import components
import { SeparateLine } from '../../common/separateLine';
import { CommentView } from './commentView';
//  import actions
import {
  fetchPostCommentsAction,
  doLikeAction,
} from '../../../redux/actions/index';
import {
  LIKE,
  DISLIKE,
} from '../../../redux/actions/likeComment';
//  import styles
import styles from '../post.css';

class Comments extends Component {
  componentWillMount() {
    const {
      postCommentsAction,
      postId,
    } = this.props;
    postCommentsAction(postId);
  }
  render() {
    const { isFetching, comments } = this.props.commentsData;
    if (isFetching) {
      return (
        <div className={styles.commentsSection}>
          <SeparateLine text="Reviews" />
          <span>Loading ...</span>
        </div>
      );
    }
    return (
      <div className={styles.commentsSection}>
        <SeparateLine text="Reviews" />
        {
          comments.map((comment, index) => (
            <CommentView
              {...comment}
              key={index}
              commentIndex={index}
              doLike={() => this.props.likeComment(index, LIKE)}
              doDislike={() => this.props.likeComment(index, DISLIKE)}
            />
          ))
        }
      </div>
    );
  }
}
Comments.propTypes = {
  postCommentsAction: PropTypes.func,
  likeComment: PropTypes.func,
  commentsData: PropTypes.object,
  routeParams: PropTypes.object,
  postId: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    commentsData: state.posts.comments,
  }),
  dispatch => bindActionCreators(
    {
      postCommentsAction: fetchPostCommentsAction,
      likeComment: doLikeAction,
    }, dispatch)
)(Comments);
