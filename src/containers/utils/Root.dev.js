import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from 'containers/utils/DevTools';
import Routes from 'containers/utils/Routes';

const Root = ({ store, history }) => {
  return (
    <Provider store={store}>
      <div>
        <Routes history={history} />
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
