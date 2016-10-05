
// ACTION TO GET THE ORIGINAL SIGNIN INTO SPOTIFY TO GET A 'CODE'







/// API ACTIONS (REQUESTS TO THE RAILS API)


export function fetchUsers() {

  const users = fetch('http://localhost:5050/users').then(response => { return response.json()}).then(userPayLoad => { return userPayLoad})
  return { type: 'FETCH_USERS',
            payload: users
          }
}
