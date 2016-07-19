import {
  SHOW_GOOGLE_MARKER_INFO_WINDOW,
  CLOSE_GOOGLE_MARKER_INFO_WINDOW,
} from './actionTypes';

export const showInfoWindowAction = (index) => ({
  type: SHOW_GOOGLE_MARKER_INFO_WINDOW,
  index,
});
export const closeInfoWindowAction = (index) => ({
  type: CLOSE_GOOGLE_MARKER_INFO_WINDOW,
  index,
});
