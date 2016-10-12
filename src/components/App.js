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
    return (this.props.children);
  }
}

export default App;
