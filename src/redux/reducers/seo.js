// import fetch from 'isomorphic-fetch';
import {
  FETCH_SEO_REQUEST,
  FETCH_SEO_SUCCESS,
  FETCH_SEO_FAILURE,
} from '../actions/actionTypes';

// const fetchData = () => (fetch('/seo.json').then(response => response.json()));

export const fetchSeoDataReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SEO_REQUEST:
      return state;
    case FETCH_SEO_SUCCESS:
      return action.response[action.seoKey];
    case FETCH_SEO_FAILURE:
      return {};
    default:
      return state;
  }
};
