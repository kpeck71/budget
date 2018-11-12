import { createStore, combineReducers, applyMiddleware } from 'redux';
import { rootReducer, initialState } from './reducers';
import { reducer, initialState as userInitialState } from './currentUser';
import loggingMiddleware from './loggingMiddleware';
import apiMiddleware from './apiMiddleware';


export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      apiMiddleware,
      loggingMiddleware
    )
  );

  return store
}

export default configureStore;
