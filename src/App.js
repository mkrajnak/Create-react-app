import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

const Button = (props) => <button onClick={props.onClick}>{props.name}</button>
// Statefull component
const Counter = ({value, onIncrement, onDecrement}) => {
  return (
    <div>
      <h1>Counter </h1>
      <Button name='+' onClick={onIncrement()}></Button>
      <Button name='-' onClick={onDecrement()}></Button>
    </div>
    )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch({type: 'INCREMENT'})
    },
    onDecrement: () => {
      dispatch({type: 'DECREMENT'})
    }
  };
};

const VisibleCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

// main componenet
const App = () => (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <br/>
        <VisibleCounter/>
      </div>
  )

export default App;
