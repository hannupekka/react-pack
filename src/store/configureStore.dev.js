import { createStore, applyMiddleware, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer, logics } from 'redux/index';
import getHistoryInstance from 'utils/history';

// Logger.
const loggerMiddleware = createLogger();

// Logics.
const logicMiddleware = createLogicMiddleware(logics);

// Middlewares.
const middlewares = [
  thunkMiddleware,
  logicMiddleware,
  loggerMiddleware,
  routerMiddleware(getHistoryInstance()),
];

// Remove redux-logger during tests.
if (process.env.TEST_RUNNER) {
  middlewares.splice(2, 1);
}

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(...middlewares)
);

module.exports = function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    // eslint-disable-next-line max-len
    // $FixMe Line below produces "call of method `accept`. Method cannot be called on 'hot' of unknown type".
    module.hot.accept('redux/index', () => {
      /* eslint-disable global-require */
      store.replaceReducer(require('redux/index').rootReducer);
      /* eslint-enable global-require */
    });
  }

  return store;
};
