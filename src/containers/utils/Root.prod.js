// @flow

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Routes from 'containers/utils/Routes';

const Root = (props: { store: Object, history: Object }) => {
  return (
    <Provider store={props.store}>
      <Routes history={props.history} />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

module.exports = Root;
