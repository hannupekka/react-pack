// @flow
import React from 'react';
import { Provider } from 'react-redux';
import Routes from 'containers/utils/Routes';

const Root = ({ store, history }: { store: Object, history: Object }): React$Element<any> => (
  <Provider store={store}>
    <div>
      <Routes history={history} />
    </div>
  </Provider>
);

module.exports = Root;
