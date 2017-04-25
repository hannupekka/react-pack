// @flow
import styles from 'styles/main.less';
import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Header from 'components/Header';
import Index from 'containers/Index';
import RepoSearch from 'containers/RepoSearch';
import CSSModules from 'react-css-modules';

const Routes = (props: { history: Object }): React$Element<any> => {
  return (
    <ConnectedRouter history={props.history}>
      <div>
        <Route path="/" component={Header} />
        <div styleName="content">
          <Route exact path="/" component={Index} />
          <Route exact path="/repos" component={RepoSearch} />
        </div>
      </div>
    </ConnectedRouter>
  );
};

export default CSSModules(Routes, styles);
