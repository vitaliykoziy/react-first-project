import fetch from 'isomorphic-fetch';
import {
  RECEIVE_SEO,
} from './actionTypes';

export const fetchSeoDataAction = () => (
  {
    type: RECEIVE_SEO,
    seo: fetch('../../../api/seo.json').then(response => response.json()),
  }
);
