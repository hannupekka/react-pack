import styles from 'styles/main.less';
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Header from 'components/Header';
import ConnectedIndex from 'containers/Index';
import ConnectedRepoSearch from 'containers/RepoSearch';

const Routes = props => (
  <ConnectedRouter history={props.history}>
    <div>
      <Route path="/" component={Header} />
      <div className={styles.content}>
        <Route exact path="/" component={ConnectedIndex} />
        <Route exact path="/repos" component={ConnectedRepoSearch} />
      </div>
    </div>
  </ConnectedRouter>
);

Routes.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Routes;
