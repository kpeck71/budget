import * as types from './types';
import { combineReducers } from 'redux';

import * as currentUser from './currentUser';
import * as currentTime from './currentTime'


// our root reducer starts with the initial state
// and must return a representation of the next state
export const rootReducer = combineReducers({
  currentTime: currentTime.reducer,
  currentUser: currentUser.reducer,
})

// a reducer is only a function!
// it's sole responsibility is to return a representation of the next state

// root reducer returns a representation of the current global state of the App
// when we dispatch an action on the store, this reducer function will be called
  // on the current state of the app and the action that causes the state to update

// initial (starting) state
export const initialState = {
  currentTime: currentTime.initialState,
  currentUser: currentUser.initialState
}

export default rootReducer;
