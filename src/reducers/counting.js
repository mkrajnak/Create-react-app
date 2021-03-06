const counter = (state = {value: 0}, action) => {
  switch (action.type) {
      case 'INCREMENT':
        return Object.assign({}, state, {
          value: state.value + 1
        })
      case 'DECREMENT':
        return Object.assign({}, state,{
        value: state.value - 1
      })
      default:
        return state
    }
}
export default counter;
