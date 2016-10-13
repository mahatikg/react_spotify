import React, { Component } from 'react';
import './App.css';
import NavBar from './nav_bar';
import {Link} from 'react-router';
import {spotify_auth} from '../variables'
class Home extends Component {

  logSpot(){
    window.location.href=spotify_auth
  }

  render() {
    return (
      <div className="App">
        <div className="home">
          <div className="mid_div">
              <h1 id="home-text">STASTE</h1>
                <button type="button" name="button" onClick={this.logSpot} className="btn btn-primary">Login With Spotify</button>
                {this.props.children}
              </div>
        </div>
      </div>
    );
  }
}

export default Home;
