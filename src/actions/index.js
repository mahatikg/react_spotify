import {user_url, compare_url} from '../variables'

export function fetchUsers() {

  const users = fetch(user_url).then(response => { return response.json()}).then(userPayLoad => { return userPayLoad})
  return { type: 'FETCH_USERS',
            payload: users
          }
}

  export function compareUsers(id1, id2){

    const comparedusers = fetch(compare_url + `${id1}&id2=${id2}`).then(response => { return response.json()}).then(userPayLoad => { return userPayLoad})
    return { type: 'COMPARE_USERS',
              payload: comparedusers
            }
}
