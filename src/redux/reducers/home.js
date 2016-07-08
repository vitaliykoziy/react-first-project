// import fetch from 'isomorphic-fetch';
import {
  FETCH_HOME_LATEST_REQUEST,
  FETCH_HOME_LATEST_SUCCESS,
  FETCH_HOME_LATEST_FAILURE,
} from '../actions/actionTypes';

// const fetchData = () => (fetch('/seo.json').then(response => response.json()));

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
