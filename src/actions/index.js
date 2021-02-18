import {
  ADD_ARTICLE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from './action-types';

export const addArticle = payload => ({ type: ADD_ARTICLE, payload });
export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = () => ({ type: FETCH_USERS_SUCCESS });
export const fetchUsersError = () => ({ type: FETCH_USERS_ERROR });

export default addArticle;
