import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import getHistoryInstance from 'utils/history';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer } from 'redux/index';

// Middleware you want to use in production:
const enhancer = applyMiddleware(thunkMiddleware, routerMiddleware(getHistoryInstance()));

module.exports = function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  return createStore(rootReducer, initialState, enhancer);
};
