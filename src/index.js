import 'es5-shim';
import 'es5-shim/es5-sham';
import 'es6-shim';
import 'es6-shim/es6-sham';
import 'babel-polyfill';
import 'normalize.css/normalize.css';
import React from 'react';
import { render } from 'react-dom';
import { useRouterHistory } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from 'store/configureStore';

// Containers.
import Root from 'containers/utils/Root';

// Create store.
const store = configureStore();

// Create history.
const browserHistory = useRouterHistory(createHistory)();
const history = syncHistoryWithStore(browserHistory, store);

// Render.
render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);
