// import fetch from 'isomorphic-fetch';
import {
  RECEIVE_SEO,
} from '../actions/actionTypes';

// const fetchData = () => (fetch('../../../api/seo.json').then(response => response.json()));

export const fetchSeoDataReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEO:
      return action.seo;
    default:
      return state;
  }
};
