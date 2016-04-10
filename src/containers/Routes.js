import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Application from './Application';
import Index from './Index';
import Data from './Data';

class Routes extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={Application}>
          <IndexRoute component={Index} />
          <Route path="data" component={Data} />
        </Route>
      </Router>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;
