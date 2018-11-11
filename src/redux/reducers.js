import * as types from './types'
//
// {
//   type: types.FETCH_NEW_TIME,
//   payload: new Date().toString() //any serializable value
// }

// a reducer is only a function!
// it's sole responsibility is to return a representation of the next state

// root reducer returns a representation of the current global state of the App
// when we dispatch an action on the store, this reducer function will be called
  // on the current state of the app and the action that causes the state to update

// initial (starting) state
export const initialState = {
  currentTime: new Date().toString()
}

// our root reducer starts with the initial state
// and must return a representation of the next state
export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_NEW_TIME:
      return {...state, currentTime: action.payload }
    default:
      return state
  }
}

// export default rootReducer;
