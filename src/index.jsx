// @flow
import 'babel-polyfill';
import 'dom4';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
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
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  // eslint-disable-next-line max-len
  // $FixMe Line below produces "call of method `accept`. Method cannot be called on 'hot' of unknown type".
  module.hot.accept('./containers/utils/Root', () => {
    // eslint-disable-next-line global-require
    const NewRoot = require('./containers/utils/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
