import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Routes from 'containers/utils/Routes';

class Root extends Component {
  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <Routes history={history} />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

module.exports = Root;
