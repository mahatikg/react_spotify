import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'
import App from './components/App';
import './index.css';
import {Provider} from 'react-redux';
// import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux';
import routes from './routes'

// const store=createStore(rootReducer, applyMiddleware)

ReactDOM.render(

  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
// <Provider store={store}>
// </Provider>,
