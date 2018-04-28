import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/**
 * @param {object} initialState 
 * @returns {func} createStore
 */
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
