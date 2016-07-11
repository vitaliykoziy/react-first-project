// import fetch from 'isomorphic-fetch';
import {
  FETCH_HOME_LATEST_REQUEST,
  FETCH_HOME_LATEST_SUCCESS,
  FETCH_HOME_LATEST_FAILURE,
//  Featured
  FETCH_HOME_FEATURED_REQUEST,
  FETCH_HOME_FEATURED_SUCCESS,
  FETCH_HOME_FEATURED_FAILURE,
} from '../actions/actionTypes';

export const fetchLatestReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_HOME_LATEST_REQUEST:
      return state;
    case FETCH_HOME_LATEST_SUCCESS:
      return action.response;
    case FETCH_HOME_LATEST_FAILURE:
      return [];
    default:
      return state;
  }
};

export const fetchFeaturedReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_HOME_FEATURED_REQUEST:
      return state;
    case FETCH_HOME_FEATURED_SUCCESS:
      return action.response;
    case FETCH_HOME_FEATURED_FAILURE:
      return [];
    default:
      return state;
  }
};
