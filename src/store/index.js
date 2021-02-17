import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
