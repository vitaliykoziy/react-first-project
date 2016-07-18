import {
  SHOW_GOOGLE_MARKER_INFO_WINDOW,
  CLOSE_GOOGLE_MARKER_INFO_WINDOW,
  SET_GOOGLE_MARKER_DATA,
} from '../actions/actionTypes';

const markerDataInitalState = {
  isFetching: true,
  data: [],
};

export const googleMarkersDataReducer = (state = markerDataInitalState, action) => {
  const newState = state;
  switch (action.type) {
    case SET_GOOGLE_MARKER_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.markers,
      });
    case SHOW_GOOGLE_MARKER_INFO_WINDOW:
      newState.data[action.index].infoWindow.show = true;
      return Object.assign({}, state, newState);
    case CLOSE_GOOGLE_MARKER_INFO_WINDOW:
      newState.data[action.index].infoWindow.show = false;
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};
