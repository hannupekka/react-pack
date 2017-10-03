// @flow
import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import thunkMiddleware from 'redux-thunk';
import getHistoryInstance from 'utils/history';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer, logics } from 'redux/index';

// Logics.
const logicMiddleware = createLogicMiddleware(logics);

// Middleware you want to use in production:
const enhancer = applyMiddleware(
  thunkMiddleware,
  logicMiddleware,
  routerMiddleware(getHistoryInstance())
);

module.exports = function configureStore(initialState?: Object) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  return createStore(rootReducer, initialState, enhancer);
};
