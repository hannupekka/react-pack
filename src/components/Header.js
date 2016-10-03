// @flow
import styles from 'styles/components/Header';
import React from 'react';
import { pure } from 'recompose';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

const logo = require('../assets/logo.png');

const Header = (): React$Element<*> => {
  return (
    <header styleName="header">
      <h1 styleName="title">Example application</h1>
      <img styleName="logo" src={logo} role="presentation" />
      <nav styleName="navigation">
        <ul>
          <li><Link to={'/'}>Index</Link></li>
          <li><Link to={'/image'}>Image</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default pure(CSSModules(Header, styles));
