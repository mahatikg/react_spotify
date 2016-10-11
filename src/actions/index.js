
// ACTION TO GET THE ORIGINAL SIGNIN INTO SPOTIFY TO GET A 'CODE'







/// API ACTIONS (REQUESTS TO THE RAILS API)


export function fetchUsers() {

  const users = fetch('http://rocky-dusk-25774.herokuapp.com/users').then(response => { return response.json()}).then(userPayLoad => { return userPayLoad})
  return { type: 'FETCH_USERS',
            payload: users
          }
}

export function compareUsers(id1, id2){
  const comparedusers = fetch(`http://rocky-dusk-25774.herokuapp.com/compare?id1=${id1}&id2=${id2}`).then(response => { return response.json()}).then(userPayLoad => { return userPayLoad})
  return { type: 'COMPARE_USERS',
            payload: comparedusers
          }
}
