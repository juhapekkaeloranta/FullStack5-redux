import {createStore} from 'redux'

const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return {...state, good: state.good + 1 }
    case 'OK':
      return {...state, ok: state.ok + 1 }
    case 'BAD':
      return {...state, bad: state.bad + 1 }
    case 'RESET':
      console.log('resetting!')
      return initialState
    default:
      return state
  }
}

const Store = createStore(counterReducer)

export default Store