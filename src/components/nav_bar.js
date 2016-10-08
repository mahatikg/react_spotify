import React from 'react';

export default class NavBar extends React.Component {

  constructor(props) {
      super(props)
      this.findToken = this.findToken.bind(this)
      this.getToken = this.getToken.bind(this)
  }


//   function authenticate(){
//     var url= "https://accounts.spotify.com/authorize/"
//     var client_id_formated = "031ed6ea90bd4727b184cd84219dd697"
//     var response_type = "&response_type=code"
//     var callback = "&redirect_uri=http%3A%2F%2Flocalhost%3A5050%2Fcallback%2F"
//     var userscope = "&scope=user-top-read"
//     var final_url = url + client_id_formated + response_type + callback +userscope


// let dummy_data = fetch(final_url).then( response => response).then( response => { return fetch('http://localhost:5050/token').then(response => response).then(response => response)})
// }

   getToken(){
    return fetch('http://localhost:5050/token').then(response => {
      return response.json();
    }).then(tokenPayload => {
      console.log("gettoken", tokenPayload);
      return tokenPayload
    })
    // return fetch('/token').then(response => {
    //   return response.json() }).then(token => {
    //     debugger
    //      return token
    //     })
    // }
  }


  findToken(){
    console.log("inside findtoken", this);
  this.getToken().then(tokenPayload => {
    if (tokenPayload.error) {
      console.log(tokenPayload.error);
      this.findToken();
    } else {
      console.log("setitem", tokenPayload);
      window.localStorage.setItem('jwt', tokenPayload.token)
    }
  })
 }

render() {
  return (
    <nav className='navbar navbar-inverse'>
      <div className='navbar-header'>
        <button onClick={this.findToken}>find token</button>
        <a className='navbar-brand' href={this.props.url}>{this.props.title}</a>
        <a href="https://accounts.spotify.com/authorize/?client_id=031ed6ea90bd4727b184cd84219dd697&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5050%2Fcallback%2F&scope=user-top-read">Login with Spotify!!!</a>
      </div>
    </nav>
  )

}


}
