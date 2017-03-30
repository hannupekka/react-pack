// @flow
import styles from 'styles/containers/Application.less';
import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Header from 'components/Header';
import Index from 'containers/Index';
import ImageSearch from 'containers/ImageSearch';
import CSSModules from 'react-css-modules';

const Routes = (props: { history: Object }): ElementType => {
  return (
    <ConnectedRouter history={props.history}>
      <div>
        <Route path="/" component={Header} />
        <div styleName="content">
          <Route exact path="/" component={Index} />
          <Route exact path="/image" component={ImageSearch} />
        </div>
      </div>
    </ConnectedRouter>
  );
};

export default CSSModules(Routes, styles);
