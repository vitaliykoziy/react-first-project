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
import Comments from './comments/comments';
//  import actions
import {
  seoActions,
  fetchPostDataAction,
} from '../../redux/actions/index';
//  import styles
import styles from './post.css';

class PostView extends Component {
  componentWillMount() {
    const {
      fetchSeoDataAction,
      postDataAction,
      routeParams,
    } = this.props;
    fetchSeoDataAction('post');
    postDataAction(routeParams.id);
  }

  render() {
    const { post } = this.props.postData;
    return (
      <div className={`${styles.postContent} ${styles.content}`}>
        <Helmet {...this.props.seo} />
        <article className={styles.post}>
          <header>
            <div className={styles.row}>
              <Time className={styles.col_5} value={post.created_at * 1000} format="DD MMM YYYY" />
              <div className={`${styles.col_5} ${styles.textRight}`}>
                <Rating rating={post.rating} />
              </div>
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
        <Comments postId={this.props.routeParams.id} />
      </div>
    );
  }
}
PostView.propTypes = {
  fetchSeoDataAction: PropTypes.func,
  postDataAction: PropTypes.func,
  seo: PropTypes.object,
  postData: PropTypes.object.isRequired,
  routeParams: PropTypes.object,
};

export default connect(
  state => ({
    seo: state.seo,
    postData: state.posts.data,
  }),
  dispatch => bindActionCreators(
    {
      ...seoActions,
      postDataAction: fetchPostDataAction,
    }, dispatch)
)(PostView);
