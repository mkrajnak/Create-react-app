import React from 'react';
import logo from './logo.svg';
import './App.css';
import VisibleCounter from './Counter'

// main component
const App = () => (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <br/>
        <VisibleCounter />
     </div>
  )

export default App;
