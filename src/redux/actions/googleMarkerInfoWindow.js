import {
    SHOW_GOOGLE_MARKER_INFO_WINDOW,
    CLOSE_GOOGLE_MARKER_INFO_WINDOW
} from './actionTypes';

export const showInfoWindowAction = () => ({
    type: SHOW_GOOGLE_MARKER_INFO_WINDOW,
});
export const closeInfoWindowAction = () => ({
    type: CLOSE_GOOGLE_MARKER_INFO_WINDOW,
});
