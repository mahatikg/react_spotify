

import React from 'react';

export default class NavBar extends React.Component {

  constructor(props) {
      super(props)
      this.findToken = this.findToken.bind(this)
      this.getToken = this.getToken.bind(this)
  }

   getToken(){
    return fetch('http://rocky-dusk-25774.herokuapp.com/token').then(response => {
      return response.json();
    }).then(tokenPayload => {
      console.log("gettoken", tokenPayload);
      return tokenPayload
    })

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
      <div className='login'>
        <a className='navbar-brand' href={this.props.url}>{this.props.title}</a>
        <a className= 'navbar-brand' onClick={this.findToken}>Find Token</a>
        <a className= 'navbar-brand' href="https://accounts.spotify.com/authorize/?client_id=031ed6ea90bd4727b184cd84219dd697&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5050%2Fcallback%2F&scope=user-top-read">Login with Spotify</a>
      </div>
    </nav>
  )

}


}
