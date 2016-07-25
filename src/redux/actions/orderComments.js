import {
  ORDER_COMMENTS,
} from './actionTypes';

export const ORDER_BY_DATE_A_Z = 'byDate_A_Z';
export const ORDER_BY_DATE_Z_A = 'byDate_Z_A';
export const ORDER_BY_LIKE_A_Z = 'byLike_A_Z';
export const ORDER_BY_LIKE_Z_A = 'byLike_Z_A';
export const ORDER_BY_UNLIKE_A_Z = 'byUnlike_A_Z';
export const ORDER_BY_UNLIKE_Z_A = 'byUnlike_Z_A';

export const orderCommentsAction = (orderType) => ({
  type: ORDER_COMMENTS,
  orderType,
});
