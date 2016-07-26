import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
// Posts comments
  FETCH_POST_COMMENTS_REQUEST,
  FETCH_POST_COMMENTS_SUCCESS,
  FETCH_POST_COMMENTS_FAILURE,
// Posts comments pagination
  FETCH_PAGINATIOM_POST_COMMENTS_REQUEST,
  FETCH_PAGINATIOM_POST_COMMENTS_SUCCESS,
  FETCH_PAGINATIOM_POST_COMMENTS_FAILURE,
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
export const doCommentsPaginationAction = (postId, page) => ({
  [CALL_API]: {
    types: [
      FETCH_PAGINATIOM_POST_COMMENTS_REQUEST,
      FETCH_PAGINATIOM_POST_COMMENTS_SUCCESS,
      FETCH_PAGINATIOM_POST_COMMENTS_FAILURE,
    ],
    url: `/posts/comments/pagination/${postId}/${page}.json`,
  },
  page,
});
