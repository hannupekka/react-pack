// @flow
import 'babel-polyfill';
import 'dom4';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { render } from 'react-dom';
import getHistoryInstance from 'utils/history';
import configureStore from 'store/configureStore';

// Containers.
import Root from 'containers/utils/Root';

// Create store.
const store = configureStore();

// Get history.
const history = getHistoryInstance();

// Render.
render(
  <Root store={store} history={history} />,
  document.getElementById('app')
);
