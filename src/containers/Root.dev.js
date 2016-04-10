import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from 'containers/DevTools';
import Routes from 'containers/Routes';

module.exports = class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Routes history={history} />
          <DevTools />
        </div>
      </Provider>
    );
  }
};
