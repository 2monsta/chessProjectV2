import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './containers/Board';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Board/>
      </div>
    );
  }
}

export default App;
