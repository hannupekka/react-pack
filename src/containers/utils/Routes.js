import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Application from 'containers/Application';
import Index from 'containers/Index';
import ImageSearch from 'containers/ImageSearch';

class Routes extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={Application}>
          <IndexRoute component={Index} />
          <Route path="image" component={ImageSearch} />
        </Route>
      </Router>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;
