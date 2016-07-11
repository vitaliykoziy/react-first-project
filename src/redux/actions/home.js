import {
//  Latest
  FETCH_HOME_LATEST_REQUEST,
  FETCH_HOME_LATEST_SUCCESS,
  FETCH_HOME_LATEST_FAILURE,
//  Featured
  FETCH_HOME_FEATURED_REQUEST,
  FETCH_HOME_FEATURED_SUCCESS,
  FETCH_HOME_FEATURED_FAILURE,
} from './actionTypes';
import { CALL_API } from '../middleware/clientMiddleware';

export const fetchLatestAction = () => ({
  [CALL_API]: {
    types: [
      FETCH_HOME_LATEST_REQUEST,
      FETCH_HOME_LATEST_SUCCESS,
      FETCH_HOME_LATEST_FAILURE,
    ],
    url: '/latest.json',
  },
});

export const fetchFeaturedAction = () => ({
  [CALL_API]: {
    types: [
      FETCH_HOME_FEATURED_REQUEST,
      FETCH_HOME_FEATURED_SUCCESS,
      FETCH_HOME_FEATURED_FAILURE,
    ],
    url: '/featured.json',
  },
});
