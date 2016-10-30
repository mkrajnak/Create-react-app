const addVM = (state, action) => {
  switch (action.type) {
    case 'ADD_VM':
      return {
        id: action.id,
      }
    default:
      return state
  }
}

const addVMS = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VM':
      return [
        ...state,
        addVM(undefined, action)
      ]
    default:
      return state
  }
}

export default addVMS
