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
  setMapMarkersAction,
} from '../../redux/actions/index';
//  import styles
import styles from './post.css';

const fetchSeoData = props => props.fetchSeoDataAction('post');
const fetchPostData = props => props.fetchPostDataAction(props.routeParams.id);
const fetchPostComments = props => props.fetchPostCommentsAction(props.routeParams.id);
const setMapData = (props) => {
  if (!props.postData.isFetching) {
    const markers = [];
    props.postData.post.locations.map((location) => (
      markers.push({
        position: {
          lat: location.latitude,
          lng: location.longitude,
        },
        opacity: 1,
        infoWindow: {
          show: false,
          title: location.title,
          telephone: location.telephone,
          fax: location.fax,
        },
      })
    ));
    props.setMapMarkersAction(markers);
  }
};


class PostView extends Component {
  componentWillMount() {
    fetchSeoData(this.props);
    fetchPostData(this.props);
    fetchPostComments(this.props);
    setMapData(this.props);
  }

  renderMapView() {
    const { isFetching, data } = this.props.googleMap.markers;
    if (isFetching) {
      return <span>LOADING ....</span>;
    }
    return <Map defaultCenter={data[0].position} />;
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
          <SeparateLine text="Reviews" />
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
  setMapMarkersAction: PropTypes.func,
  seo: PropTypes.object,
  postData: PropTypes.object.isRequired,
  commentsData: PropTypes.object,
  googleMap: PropTypes.object,
};

export default connect(
  state => ({
    seo: state.seo,
    postData: state.posts.data,
    commentsData: state.posts.comments,
    googleMap: state.posts.googleMap,
  }),
  dispatch => bindActionCreators(
    {
      ...seoActions,
      fetchPostDataAction,
      fetchPostCommentsAction,
      setMapMarkersAction,
    }, dispatch)
)(PostView);
