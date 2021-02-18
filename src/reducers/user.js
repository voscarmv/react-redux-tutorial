import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from '../actions/action-types';

const initialState = {
  loading: false,
  data: '',
  error: '',
};

const userReducer = (state = initialState, action) => {
  if (action.type === FETCH_USERS_REQUEST) {
    //
  } else if (action.type === FETCH_USERS_SUCCESS) {
    //
  } else if (action.type === FETCH_USERS_ERROR) {
    //
  }
  return state;
};

export default userReducer;
