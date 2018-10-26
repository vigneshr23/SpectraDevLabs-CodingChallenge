import React, { Component } from 'react';
import logo from './logo.svg';
import PlayerList from './components/player-search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerList />
      </div>
    );
  }
}

export default App;
