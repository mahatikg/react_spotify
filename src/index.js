import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'
import App from './components/App';
import './index.css';
import { fetchUsers } from './actions'
import { compareUsers } from './actions'
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux';
import routes from './routes'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(ReduxPromise))

store.dispatch( fetchUsers() )


ReactDOM.render(
<Provider store={store} >
  <Router history={browserHistory} routes={routes} />
</Provider>,
  document.getElementById('root')
);
