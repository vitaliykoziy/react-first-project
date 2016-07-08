import {
  FETCH_HOME_LATEST_REQUEST,
  FETCH_HOME_LATEST_SUCCESS,
  FETCH_HOME_LATEST_FAILURE,
} from './actionTypes';
import { CALL_API } from '../middleware/clientMiddleware';

export const fetchLatestAction = () => ({
  url: '/latest.json',
  [CALL_API]: {
    types: [FETCH_HOME_LATEST_REQUEST, FETCH_HOME_LATEST_SUCCESS, FETCH_HOME_LATEST_FAILURE],
  },
});
