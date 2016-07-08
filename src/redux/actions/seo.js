import {
  FETCH_SEO_REQUEST,
  FETCH_SEO_SUCCESS,
  FETCH_SEO_FAILURE,
} from './actionTypes';
import { ACTION_KEY } from '../middleware/clientMiddleware';

export const fetchSeoDataAction = (seoKey) => ({
  url: '/seo.json',
  seoKey,
  [ACTION_KEY]: {
    types: [FETCH_SEO_REQUEST, FETCH_SEO_SUCCESS, FETCH_SEO_FAILURE],
  },
});
