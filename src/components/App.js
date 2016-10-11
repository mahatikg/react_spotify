import React, { Component } from 'react';
import './App.css';
import NavBar from './nav_bar';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="home">

              <h1>STASTE</h1>
                <h4><a href="https://accounts.spotify.com/authorize/?client_id=031ed6ea90bd4727b184cd84219dd697&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5050%2Fcallback%2F&scope=user-top-read">Login with Spotify!</a></h4>
                {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
