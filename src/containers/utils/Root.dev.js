// @flow

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from 'containers/utils/DevTools';
import Routes from 'containers/utils/Routes';

const Root = (props: { store: Object, history: Object }) => {
  return (
    <Provider store={props.store}>
      <div>
        <Routes history={props.history} />
        <DevTools />
      </div>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

module.exports = Root;
