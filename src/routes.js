import React from 'react';
import {Route} from 'react-router';
import App from './components/App'
import UserIndex from './components/user_index'
import UserShow from './components/user_show'
import ArtistShow from './components/artist_show'
import BarComponent1 from './components/artist_top10_chart'




export default (
  <Route path='/' component={App}>
   <Route path='/users' component={UserIndex}/>
   <Route path='/users/:id' component={UserShow}>
     <Route path='/users/:id' component={ArtistShow} />
     <Route path='/users/:id' component={BarComponent1} />
   </Route>
  </Route>
)

// {jwt: alsdfkjals;dfj;lasdkfj;lsadjfl;sadjf, current_user_id: 7}
//
// function authenticate(nextState, replace) {
//   // if there is no token in session storage, don't let them in this set of routes. instead, redirect back to root path so
//   // user can click log in with Spotify
//   if (!sessionStorage.token) {
//     fetch('http://localhost:5050/token').then(response => {
//       response.json()
//     }).then(tokenPayload => {
//       sessionStorage.addItem('token', tokenPaylad.jwt)
//     }).then( () => {
//       if (!sessionStorage.token) {
//         replace({
//           path: '/',
//           nextState: i forget the actual
//         })
//
//       }
//     })
//   }
// }
