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
    return {
      ...state,
      loading: true,
    };
  } if (action.type === FETCH_USERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: '',
    };
  } if (action.type === FETCH_USERS_ERROR) {
    return {
      ...state,
      loading: false,
      error: 'Error No...',
    };
  }
  return state;
};

export default userReducer;
