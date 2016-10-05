
// ACTION TO GET THE ORIGINAL SIGNIN INTO SPOTIFY TO GET A 'CODE'
export function makeSignInRequest(){
  //makes first request to spotify with credentials to begin oauth process
  var url= "https://accounts.spotify.com/authorize/"
  var client_id_formated = "031ed6ea90bd4727b184cd84219dd697"
  var response_type = "&response_type=code"
  var callback = "&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback%2F"
  var userscope = "&scope=user-top-read"
  var final_url = url + client_id_formated + response_type + callback +userscope

  const authenticate = fetch(final_url,
  {method: 'GET'}).then().then(fetch('http://localhost:5050/token').then(response => {
    response.json()

  }).then(tokenpayload => {
    debugger;
  }))
}






/// API ACTIONS (REQUESTS TO THE RAILS API)


export function fetchUsers() {

  const users = fetch('http://localhost:5050/users').then(response => { return response.json()}).then(userPayLoad => { return userPayLoad})
  return { type: 'FETCH_USERS',
            payload: users
          }
}
