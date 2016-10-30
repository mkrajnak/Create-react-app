import React from 'react';
import { connect } from 'react-redux';
import Button from './Button'

const Counter = ({ name, value, onIncrement, onDecrement}) => {
  return (
    <div>
      <h1>{name} {value}</h1>
      <Button
        name='+'
        onClick={() => onIncrement()}>
      </Button>
      <Button
        name='-'
        onClick={() => onDecrement()}>
      </Button>
      <br/>
    </div>
    )
}

Counter.propTypes = {
  name: React.PropTypes.string,
  value: React.PropTypes.number.isRequired,
  onIncrement: React.PropTypes.func.isRequired,
  onDecrement: React.PropTypes.func.isRequired
}

Counter.defaultProps = {
  name: "Counter:",
  value: 0
}

const mapStateToProps = (state) => {
  return {
    value: state.value
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
  }
}

const VisibleCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default VisibleCounter;
