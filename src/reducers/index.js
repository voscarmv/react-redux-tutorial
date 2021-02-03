import { ADD_ARTICLE } from 'actions/action-types';

const initialState = {
  articles: [],
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ARTICLE) {
    state.articles.push(action.payload);
  }
  return state;
};

export default rootReducer;
