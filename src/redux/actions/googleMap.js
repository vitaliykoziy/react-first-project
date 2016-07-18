import {
  SHOW_GOOGLE_MARKER_INFO_WINDOW,
  CLOSE_GOOGLE_MARKER_INFO_WINDOW,
  SET_GOOGLE_MARKER_DATA,
} from './actionTypes';

export const showInfoWindowAction = (index) => ({
  type: SHOW_GOOGLE_MARKER_INFO_WINDOW,
  index,
});
export const closeInfoWindowAction = (index) => ({
  type: CLOSE_GOOGLE_MARKER_INFO_WINDOW,
  index,
});
export const setMapMarkersAction = (markers) => ({
  type: SET_GOOGLE_MARKER_DATA,
  markers,
});
