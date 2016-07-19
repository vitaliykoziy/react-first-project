import {
  LIKE_COMMENT,
  DISLIKE_COMMENT,
} from './actionTypes';

export const doLikeAction = (index) => ({
  type: LIKE_COMMENT,
  index,
});
export const doDislikeAction = (index) => ({
  type: DISLIKE_COMMENT,
  index,
});
