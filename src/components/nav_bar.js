import React from 'react';

export default function NavBar(props){

//   function authenticate(){
//     var url= "https://accounts.spotify.com/authorize/"
//     var client_id_formated = "031ed6ea90bd4727b184cd84219dd697"
//     var response_type = "&response_type=code"
//     var callback = "&redirect_uri=http%3A%2F%2Flocalhost%3A5050%2Fcallback%2F"
//     var userscope = "&scope=user-top-read"
//     var final_url = url + client_id_formated + response_type + callback +userscope


// let dummy_data = fetch(final_url).then( response => response).then( response => { return fetch('http://localhost:5050/token').then(response => response).then(response => response)})
// }

  function getToken(){
    return fetch('http://localhost:5050/token').then(response => {
      return response.json();
    }).then(tokenPayload => {
      return tokenPayload
    })
    // return fetch('/token').then(response => {
    //   return response.json() }).then(token => {
    //     debugger
    //      return token          
    //     })
    // }
  }
  

 function findToken(){
  getToken().then(tokenPayload => {
    debugger;
    if (tokenPayload.error) {
      findToken();
    } else {
      debugger;
      sessionStorage.setItem('jwt', tokenPayload.jwt)
    }
  })
 }

  return (
    <nav className='navbar navbar-inverse'>
      <div className='navbar-header'>
        <a className='navbar-brand' href={props.url}>{props.title}</a>
        <a href="http://localhost:5050/get-auth-code">Login with Spotify!!!</a>
      </div>
    </nav>
  )

}
