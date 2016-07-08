import {
  FETCH_HOME_LATEST_REQUEST,
  FETCH_HOME_LATEST_SUCCESS,
  FETCH_HOME_LATEST_FAILURE,
} from './actionTypes';
import { ACTION_KEY } from '../middleware/clientMiddleware';

export const fetchLatestAction = () => ({
  url: '/latest.json',
  [ACTION_KEY]: {
    types: [FETCH_HOME_LATEST_REQUEST, FETCH_HOME_LATEST_SUCCESS, FETCH_HOME_LATEST_FAILURE],
  },
});
