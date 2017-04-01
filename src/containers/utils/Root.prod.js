// @flow
import React from 'react';
import { Provider } from 'react-redux';
import Routes from 'containers/utils/Routes';

const Root = ({ store, history }: { store: Object, history: Object }): React$Element<any> => {
  return (
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  );
};

module.exports = Root;
