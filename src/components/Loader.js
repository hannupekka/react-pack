// @flow
import styles from 'styles/components/Loader.less';
import React from 'react';
import { pure } from 'recompose';
import type { Component } from 'recompose';
import CSSModules from 'react-css-modules';

const Loader: Component<{}> = (): React$Element<any> =>
  <div>
    <div styleName="spinner" />
    <div styleName="text">Loading</div>
  </div>;

export default pure(CSSModules(Loader, styles));
