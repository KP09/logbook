import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PassagesContainer from './components/PassagesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Your Sailing Logbook</h1>
        </header>
        <PassagesContainer />
      </div>
    );
  }
}

export default App;
