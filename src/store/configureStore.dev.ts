import { createStore, applyMiddleware, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer, logics } from '@app/redux/index';
import { history } from '@app/utils/history';
import { TDispatch, IRootState } from '@app/types';

// Logger.
const noopLogger = () => (next: TDispatch) => (action: TDispatch) => next(action);
const loggerMiddleware = process.env.TEST_RUNNER ? noopLogger : createLogger();

// Logics.
const logicMiddleware = createLogicMiddleware(logics);

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunkMiddleware, logicMiddleware, loggerMiddleware, routerMiddleware(history))
);

export const configureStore = (initialState?: IRootState) => {
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    // eslint-disable-next-line max-len
    // $FixMe Line below produces "call of method `accept`. Method cannot be called on 'hot' of unknown type".
    module.hot.accept('@app/redux/index', () => {
      /* eslint-disable global-require */
      store.replaceReducer(require('@app/redux/index').rootReducer);
      /* eslint-enable global-require */
    });
  }

  return store;
};
