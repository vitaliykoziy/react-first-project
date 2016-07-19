import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
// Posts comments
  FETCH_POST_COMMENTS_REQUEST,
  FETCH_POST_COMMENTS_SUCCESS,
  FETCH_POST_COMMENTS_FAILURE,
// Google map InformationWindow
  SHOW_GOOGLE_MARKER_INFO_WINDOW,
  CLOSE_GOOGLE_MARKER_INFO_WINDOW,
// Like/Dislike comments
  LIKE_COMMENT,
  DISLIKE_COMMENT,
} from '../actions/actionTypes';

const initialStatePost = {
  isFetching: true,
  post: {},
};

const setGoogleMapData = (response) => {
  const newResponse = response;
  const markers = [];
  response.locations.map((location) => (
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
  newResponse.googleMap = {
    markers,
    activeWindow: 0,
  };
  return newResponse;
};


const toggleInfoWindow = (state, currentWindowIndex) => {
  const newState = state;
  const prevActiveWindow = newState.post.googleMap.activeWindow;
  newState.post.googleMap.markers[prevActiveWindow].infoWindow.show = false;
  newState.post.googleMap.markers[currentWindowIndex].infoWindow.show = true;
  newState.post.googleMap.activeWindow = currentWindowIndex;
  return newState;
};

export const fetchPostDataReducer = (state = initialStatePost, action) => {
  const newState = state;
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return Object.assign({}, state, {
        isFetching: 1,
        post: {},
      });
    case FETCH_POST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        post: setGoogleMapData(action.response),
      });
    case FETCH_POST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        post: {},
      });
    case SHOW_GOOGLE_MARKER_INFO_WINDOW:
      return Object.assign({}, state, toggleInfoWindow(state, action.index));
    case CLOSE_GOOGLE_MARKER_INFO_WINDOW:
      newState.post.googleMap.markers[action.index].infoWindow.show = false;
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

const initialStatePostComments = {
  isFetching: true,
  comments: [],
};
const doLike = (state, index) => {
  const comments = state.comments;
  const { likeStatus, like, unlike } = comments[index].likes;
  switch (likeStatus) {
    case 0:
      comments[index].likes = {
        likeStatus: 1,
        like: like + 1,
        unlike,
      };
      break;
    case 1:
      comments[index].likes = {
        likeStatus: 0,
        like: like - 1,
        unlike,
      };
      break;
    case -1:
      comments[index].likes = {
        likeStatus: 1,
        like: like + 1,
        unlike: unlike - 1,
      };
      break;
    default:
      return state;
  }
  const newState = state;
  newState.comments = comments;
  return newState;
};

const doDislike = (state, index) => {
  const comments = state.comments;
  const { likeStatus, like, unlike } = comments[index].likes;
  switch (likeStatus) {
    case 0:
      comments[index].likes = {
        likeStatus: -1,
        like,
        unlike: unlike + 1,
      };
      break;
    case 1:
      comments[index].likes = {
        likeStatus: -1,
        like: like - 1,
        unlike: unlike + 1,
      };
      break;
    case -1:
      comments[index].likes = {
        likeStatus: 0,
        like,
        unlike: unlike - 1,
      };
      break;
    default:
      return state;
  }
  const newState = state;
  newState.comments = comments;
  return newState;
};

export const fetchPostCommentsReducer = (state = initialStatePostComments, action) => {
  switch (action.type) {
    case FETCH_POST_COMMENTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        comments: [],
      });
    case FETCH_POST_COMMENTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        comments: action.response,
      });
    case FETCH_POST_COMMENTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        comments: [],
      });
    case LIKE_COMMENT:
      return doLike(state, action.index);
    case DISLIKE_COMMENT:
      return doDislike(state, action.index);
    default:
      return state;
  }
};
