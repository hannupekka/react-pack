// @flow
import styles from 'styles/main.less';
import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Header from 'components/Header';
import ConnectedIndex from 'containers/Index';
import ConnectedRepoSearch from 'containers/RepoSearch';
import CSSModules from 'react-css-modules';

const Routes = (props: { history: Object }): React$Element<any> => {
  return (
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
};

export default CSSModules(Routes, styles);
