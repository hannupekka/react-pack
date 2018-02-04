import 'babel-polyfill';
import 'dom4';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { history } from '@app/utils/history';
import configureStore from '@app/store/configureStore';

// Containers.
import Root from '@app/containers/utils/Root';

// Create store.
const store = configureStore();

// Render.
ReactDOM.render(
  <AppContainer warnings={false}>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('@app/containers/utils/Root', () => {
    ReactDOM.render(
      <AppContainer warnings={false}>
        <Root store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
