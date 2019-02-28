import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Atlas from "./containers/Atlas.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Atlas  aProp="hello"/>
        </header>
      </div>
    );
  }
}

export default App;
