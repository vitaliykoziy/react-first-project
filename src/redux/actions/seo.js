import {
  FETCH_SEO_REQUEST,
  FETCH_SEO_SUCCESS,
  FETCH_SEO_FAILURE,
} from './actionTypes';
import { CALL_API } from '../middleware/clientMiddleware';

export const fetchSeoDataAction = (seoKey) => ({
  seoKey,
  [CALL_API]: {
    types: [FETCH_SEO_REQUEST, FETCH_SEO_SUCCESS, FETCH_SEO_FAILURE],
    url: '/seo.json',
  },
});
