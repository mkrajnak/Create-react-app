import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Stateless component
const Button = (props) => <button onClick={props.onClick}>{props.name}</button>;

// Statefull component
// Using react logo for component lifecycle methods demostration
class ReactLogo extends Component{
  componentWillMount(){
    console.log("Mouting logo")
  }
  render(){
    console.log("Rendering logo")
    if (this.props.logoIsViewed) {
      return <img src={logo} className="App-logo" alt="logo" />
    }
    else {
      return <h2>Click on button to toggle logo</h2>
    }
  }
  componentWillDidMount(){
    console.log("Logo mounted")
  }
  // does nothing
  componentWillUnmount(){
    console.log("Delete component")
  }
  componentWillReceiveProps(nextProps){

  }
  shouldComponentUpdate(nextProps, nextState){
    return true
  }
  componentDidUpdate(prevProps, prevState){
    
  }
}

// Statefull component
class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {counts: props.initialCount}
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment(){
    this.setState({counts: (this.state.counts + 1)});
  }
  decrement(){
    this.setState({counts: (this.state.counts - 1)});
  }
  render(){
    return (
      <div>
        <h1>{this.props.name} {this.state.counts}</h1>
        <Button name="Increment" onClick={this.increment}/>
        <Button name="Decrement" onClick={this.decrement}/>
      </div>
    );
  }
}

// define type of props
Counter.propTypes = {
  name: React.PropTypes.string.isRequired,
  initialCount: React.PropTypes.number
}
// default values
Counter.defaultProps = {
  name: 'Counting:',
  initialCount: 0
}

// main componenet
class App extends Component {
  constructor(){
    super()
    this.state = {logoIsViewed: true}
    this.updateLogo = this.updateLogo.bind(this)
  }
  updateLogo(){
    this.setState({logoIsViewed: !this.state.logoIsViewed})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <ReactLogo logoIsViewed={this.state.logoIsViewed}/>
        </div>
        <br/>
        <Button name="Toggle logo" onClick={this.updateLogo}/>
        <hr/>
        <Counter/>
        <hr/>
      </div>
    );
  }
}

export default App;
