import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import VisibleCounter from './Counter'
import VirtualMachine from './vm'

// main component
const App = () => (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <br/>
        <VisibleCounter />
        <VirtualMachine />
     </div>
  )

export default App;
