import styles from 'styles/main.less';
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Loadable from 'react-loadable';
import CSSModules from 'react-css-modules';

const loading = () => '';

const Header = Loadable({ loader: () => import('components/Header'), loading });
const ConnectedIndex = Loadable({ loader: () => import('containers/Index'), loading });
const ConnectedRepoSearch = Loadable({ loader: () => import('containers/RepoSearch'), loading });

const Routes = props => (
  <ConnectedRouter history={props.history}>
    <div>
      <Route path="/" component={Header} />
      <div styleName="content">
        <Route exact path="/" component={ConnectedIndex} />
        <Route exact path="/repos" component={ConnectedRepoSearch} />
      </div>
    </div>
  </ConnectedRouter>
);

Routes.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default CSSModules(Routes, styles);
