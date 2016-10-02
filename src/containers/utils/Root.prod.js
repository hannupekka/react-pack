// @flow
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Routes from 'containers/utils/Routes';

const Root = ({ store, history }: { store: Object, history: Object }) => {
  return (
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

module.exports = Root;
