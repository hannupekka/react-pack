import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from 'containers/Routes';

module.exports = class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Routes history={history} />
        </div>
      </Provider>
    );
  }
};
