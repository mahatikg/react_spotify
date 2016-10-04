import React from 'react';
import {Route} from 'react-router';
import App from './components/App'
import UserIndex from './components/user_index'

export default (
  <Route path='/' component={App}>
   <Route path='/users' component={UserIndex} />
  </Route>
)
