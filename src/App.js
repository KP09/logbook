import React, { Component } from 'react';
import './stylesheets/index.css';
import PassagesContainer from './components/PassagesContainer'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="title">Your Sailing Logbook</h1>
        </header>
        <PassagesContainer />
      </div>
    );
  }
}

export default App;
