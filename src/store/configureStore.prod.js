import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'reducers/index';

// Middleware you want to use in production:
const enhancer = applyMiddleware(thunkMiddleware);

module.exports = function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  return createStore(rootReducer, initialState, enhancer);
};
