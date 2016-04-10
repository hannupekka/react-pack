import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Application from 'containers/Application';
import Index from 'containers/Index';
import Image from 'containers/Image';

class Routes extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={Application}>
          <IndexRoute component={Index} />
          <Route path="image" component={Image} />
        </Route>
      </Router>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;
