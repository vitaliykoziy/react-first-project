import {
  SHOW_GOOGLE_MARKER_INFO_WINDOW,
  CLOSE_GOOGLE_MARKER_INFO_WINDOW
} from '../actions/actionTypes';

const initialStatePost = {
  show: false,
};

export const toggleGoogleMarkerInfoWindowReducer = (state = initialStatePost, action) => {
  switch (action.type) {
    case SHOW_GOOGLE_MARKER_INFO_WINDOW:
      return Object.assign({}, state, {
        show: true,
      });
    case CLOSE_GOOGLE_MARKER_INFO_WINDOW:
      return Object.assign({}, state, {
        show: false,
      });
    default:
      return state;
  }
};
