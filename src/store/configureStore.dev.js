// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistState } from 'redux-devtools';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import getHistoryInstance from 'utils/history';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer, rootEpic } from 'redux/index';
import DevTools from 'containers/utils/DevTools';

// Logger.
const loggerMiddleware = createLogger();

// Epics.
const epicMiddleware = createEpicMiddleware(rootEpic);

function getDebugSessionKey() {
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}

// Middlewares.
const middlewares = [
  thunkMiddleware,
  epicMiddleware,
  loggerMiddleware,
  routerMiddleware(getHistoryInstance()),
];

// Remove redux-logger during tests.
if (process.env.TEST_RUNNER) {
  middlewares.splice(2, 1);
}

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(...middlewares),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  persistState(getDebugSessionKey())
);

module.exports = function configureStore(initialState?: Object) {
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    // eslint-disable-next-line max-len
    // $FixMe Line below produces "call of method `accept`. Method cannot be called on 'hot' of unknown type".
    module.hot.accept('redux/index', () => {
      /* eslint-disable global-require */
      store.replaceReducer(require('redux/index').rootReducer);
      epicMiddleware.replaceEpic(require('redux/index').rootEpic);
      /* eslint-enable global-require */
    });
  }

  return store;
};
