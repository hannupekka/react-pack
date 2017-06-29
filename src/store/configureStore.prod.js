// @flow
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunkMiddleware from 'redux-thunk';
import getHistoryInstance from 'utils/history';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer, rootEpic } from 'redux/index';

// Epics.
const epicMiddleware = createEpicMiddleware(rootEpic);

// Middleware you want to use in production:
const enhancer = applyMiddleware(
  thunkMiddleware,
  epicMiddleware,
  routerMiddleware(getHistoryInstance())
);

module.exports = function configureStore(initialState?: Object) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  return createStore(rootReducer, initialState, enhancer);
};
