import {
//  List
  FETCH_CATEGORIES_LIST_REQUEST,
  FETCH_CATEGORIES_LIST_SUCCESS,
  FETCH_CATEGORIES_LIST_FAILURE,
} from './actionTypes';
import { CALL_API } from '../middleware/clientMiddleware';

export const fetchCategoriesListAction = () => ({
  [CALL_API]: {
    types: [
      FETCH_CATEGORIES_LIST_REQUEST,
      FETCH_CATEGORIES_LIST_SUCCESS,
      FETCH_CATEGORIES_LIST_FAILURE,
    ],
    url: '/categories_list.json',
  },
});
