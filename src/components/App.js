import React, { Component } from 'react';
import './App.css';
import NavBar from './nav_bar';
import {Link} from 'react-router';
import {spotify_auth} from '../variables'

class App extends Component {

logSpot(){
  console.log("test");
  window.location.href=spotify_auth
}

  render() {
    console.log(spotify_auth);
    return (
      <div className="App">
        <div className="home">

              <h1>STASTE</h1>
                <h4><a onClick={this.logSpot} >Login with Spotify!</a></h4>
                {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
