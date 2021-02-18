import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import forbiddenWordsMiddleware from '../middleware/index';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      forbiddenWordsMiddleware,
    ),
  ),
);

export default store;
