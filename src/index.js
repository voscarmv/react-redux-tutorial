import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import addArticle from './actions/index';
import store from './store/index';
import App from './App';

window.store = store;
window.addArticle = addArticle;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
