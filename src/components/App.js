import React, { Component } from 'react';
import './App.css';
import NavBar from './nav_bar';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title="Staste" url='/' />
        <Link to="/users">See all users</Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;
