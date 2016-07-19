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
} from '../actions/actionTypes';

const initialStatePost = {
  isFetching: true,
  post: {},
};
const initialStatePostComments = {
  isFetching: true,
  comments: [],
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
  };
  return newResponse;
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
      newState.post.googleMap.markers[action.index].infoWindow.show = true;
      return Object.assign({}, state, newState);
    case CLOSE_GOOGLE_MARKER_INFO_WINDOW:
      newState.post.googleMap.markers[action.index].infoWindow.show = false;
      return Object.assign({}, state, newState);
    default:
      return state;
  }
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
    default:
      return state;
  }
};
