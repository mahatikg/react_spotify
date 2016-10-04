import React from 'react';
import {Route} from 'react-router';
import App from './components/App'
import UserIndex from './components/user_index'
import UserShow from './components/user_show'
import ArtistShow from './components/artist_show'


export default (
  <Route path='/' component={App}>
   <Route path='/users' component={UserIndex} />
   <Route path='/users/:id' component={UserShow}>
     <Route path='/users/:id' component={ArtistShow} />
   </Route>
  </Route>
)
