import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Routes from 'containers/utils/Routes';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Routes history={history} />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

module.exports = Root;
