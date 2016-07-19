//  import modules
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Time from 'react-time';
//  import utils
import { Rating } from '../common/rating';
import Map from '../common/googleMap/googleMap';
// import components
import { SeparateLine } from '../common/separateLine';
import { Comment } from './comment';
//  import actions
import {
  seoActions,
  fetchPostDataAction,
  fetchPostCommentsAction,
} from '../../redux/actions/index';
//  import styles
import styles from './post.css';

class PostView extends Component {
  componentWillMount() {
    const {
      fetchSeoDataAction,
      postDataAction,
      postCommentsAction,
      routeParams,
    } = this.props;
    fetchSeoDataAction('post');
    postDataAction(routeParams.id);
    postCommentsAction(routeParams.id);
  }

  render() {
    const { post } = this.props.postData;
    const { comments } = this.props.commentsData;
    return (
      <div className={styles.postContent}>
        <Helmet {...this.props.seo} />
        <article className={styles.post}>
          <header>
            <div className={styles.information}>
              <Time value={post.created_at * 1000} format="DD MMM YYYY" />
              <Rating rating={post.rating} />
            </div>
            <h1>{post.title}</h1>
          </header>
          <content>
            <p>
              <img className={styles.leftImage} src={post.image} alt="post" />
              {post.content}
            </p>
          </content>
          <Map />
        </article>
        <div className={styles.commentsSection}>
          <SeparateLine text="Reviews" />
          {
            comments.map((comment, index) => (
              <Comment {...comment} key={index} />
            ))
          }
        </div>
      </div>
    );
  }
}
PostView.propTypes = {
  fetchSeoDataAction: PropTypes.func,
  postCommentsAction: PropTypes.func,
  postDataAction: PropTypes.func,
  seo: PropTypes.object,
  postData: PropTypes.object.isRequired,
  commentsData: PropTypes.object,
  routeParams: PropTypes.object,
};

export default connect(
  state => ({
    seo: state.seo,
    postData: state.posts.data,
    commentsData: state.posts.comments,
  }),
  dispatch => bindActionCreators(
    {
      ...seoActions,
      postDataAction: fetchPostDataAction,
      postCommentsAction: fetchPostCommentsAction,
    }, dispatch)
)(PostView);
