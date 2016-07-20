import {
  LIKE_COMMENT,
} from './actionTypes';

export const LIKE = 'like';
export const DISLIKE = 'dislike';

export const doLikeAction = (index, likeType) => ({
  type: LIKE_COMMENT,
  index,
  likeType,
});
