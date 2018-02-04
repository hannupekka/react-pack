import styles from '@app/styles/main.less';
import * as React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Header from '@app/components/Header';
import ConnectedIndex from '@app/containers/Index';
import ConnectedRepoSearch from '@app/containers/RepoSearch';
import { History } from 'history';

interface Props {
  history: History;
}

const Routes = (props: Props) => (
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

export default Routes;
