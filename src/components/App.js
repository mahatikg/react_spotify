import React, { Component } from 'react';
import './App.css';
import NavBar from './nav_bar';
import {Link} from 'react-router';
import {spotify_auth} from '../variables'

class App extends Component {
  render() {
    console.log(spotify_auth);
    return (
      <div className="App">
        <div className="home">

              <h1>STASTE</h1>
                <h4><a href={spotify_auth}>Login with Spotify!</a></h4>
                {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
