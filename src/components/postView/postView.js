//  import modules
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Time from 'react-time';
//  import utils
import { Rating } from '../common/rating';
import { Map } from '../../utils/googleMap';
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
import 'font-awesome-webpack';

const fetchSeoData = props => props.fetchSeoDataAction('post');
const fetchPostData = props => props.fetchPostDataAction(props.routeParams.id);
const fetchPostComments = props => props.fetchPostCommentsAction(props.routeParams.id);
const setMapData = (location) => (
  {
    markers: [{
      position: {
        lat: location.latitude,
        lng: location.longitude,
      },
    }],
    defaultCenter: {
      lat: location.latitude,
      lng: location.longitude,
    },
  }
);


class PostView extends Component {
  componentWillMount() {
    fetchSeoData(this.props);
    fetchPostData(this.props);
    fetchPostComments(this.props);
  }

  renderMapView() {
    const { isFetching, post } = this.props.postData;
    if (isFetching) {
      return <span>LOADING ....</span>;
    }
    return <Map {...setMapData(post.location)} />;
  }

  render() {
    return (
      <div className={styles.postContent}>
        <Helmet {...this.props.seo} />
        <article className={styles.post}>
          <header>
            <div className={styles.information}>
              <Time value={this.props.postData.post.created_at * 1000} format="DD MMM YYYY" />
              <Rating rating={this.props.postData.post.rating} />
            </div>
            <h1>{this.props.postData.post.title}</h1>
          </header>
          <content>
            <p>
              <img className={styles.leftImage} src={this.props.postData.post.image} alt="post" />
              {this.props.postData.post.content}
            </p>
          </content>
          <hr />
          <h2>Find us on the map</h2>
          {this.renderMapView()}
        </article>
        <div className={styles.commentsSection}>
          <SeparateLine text="Comments" />
          {
            this.props.commentsData.comments.map((comment, index) => (
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
  fetchPostCommentsAction: PropTypes.func,
  fetchPostDataAction: PropTypes.func,
  seo: PropTypes.object,
  postData: PropTypes.object.isRequired,
  commentsData: PropTypes.object,
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
      fetchPostDataAction,
      fetchPostCommentsAction,
    }, dispatch)
)(PostView);
