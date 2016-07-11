// import fetch from 'isomorphic-fetch';
import {
//  List
  FETCH_CATEGORIES_LIST_REQUEST,
  FETCH_CATEGORIES_LIST_SUCCESS,
  FETCH_CATEGORIES_LIST_FAILURE,
} from '../actions/actionTypes';

export const fetchCategoriesListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_LIST_REQUEST:
      return state;
    case FETCH_CATEGORIES_LIST_SUCCESS:
      return action.response;
    case FETCH_CATEGORIES_LIST_FAILURE:
      return [];
    default:
      return state;
  }
};
