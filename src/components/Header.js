// @flow
import styles from 'styles/components/Header.less';
import React from 'react';
import { Link } from 'react-router-dom';
import { pure } from 'recompose';
import type { Component } from 'recompose';
import CSSModules from 'react-css-modules';

const logo = require('../assets/logo.png');

const Header: Component<{}> = (): React$Element<any> => {
  return (
    <header styleName="header">
      <h1 styleName="title">Example application</h1>
      <img styleName="logo" src={logo} alt="" />
      <nav styleName="navigation">
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/repos">Repo search</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default pure(CSSModules(Header, styles));
