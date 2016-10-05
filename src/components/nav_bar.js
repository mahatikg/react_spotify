import React from 'react';

export default function NavBar(props){

  function authenticate(){
    debugger;
    var url= "https://accounts.spotify.com/authorize/"
    var client_id_formated = "031ed6ea90bd4727b184cd84219dd697"
    var response_type = "&response_type=code"
    var callback = "&redirect_uri=http%3A%2F%2Flocalhost%3A5050%2Fcallback%2F"
    var userscope = "&scope=user-top-read"
    var final_url = url + client_id_formated + response_type + callback +userscope
    debugger;
    fetch(final_url).then(response=> debugger).then(fetch('http://localhost:5050/token').then(response => {
      response.json()

    }).then(tokenpayload => {
      debugger;
    }))
  }
  return (
    <nav className='navbar navbar-inverse'>
      <div className='navbar-header'>
        <a className='navbar-brand' href={props.url}>{props.title}</a>
        <a onClick={authenticate} href= "#">Login with Spotify!!!</a>
      </div>
    </nav>
  )
}
