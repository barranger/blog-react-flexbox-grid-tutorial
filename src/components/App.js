import React, { Component } from 'react';
import Tutorial from './Tutorial';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>react-flexbox-grid Tutorial</h2>
        </div>
        <Tutorial />
      </div>
    );
  }
}

export default App;
