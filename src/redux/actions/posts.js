import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
// Posts comments
  FETCH_POST_COMMENTS_REQUEST,
  FETCH_POST_COMMENTS_SUCCESS,
  FETCH_POST_COMMENTS_FAILURE,
} from './actionTypes';
import { CALL_API } from '../middleware/clientMiddleware';

export const fetchPostDataAction = (postId) => ({
  [CALL_API]: {
    types: [FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE],
    url: `/posts/${postId}.json`,
  },
});
export const fetchPostCommentsAction = (postId) => ({
  [CALL_API]: {
    types: [FETCH_POST_COMMENTS_REQUEST, FETCH_POST_COMMENTS_SUCCESS, FETCH_POST_COMMENTS_FAILURE],
    url: `/posts/comments/${postId}.json`,
  },
});
