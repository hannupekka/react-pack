import styles from 'styles/components/Header.less';
import React from 'react';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import CSSModules from 'react-css-modules';

import logo from '../assets/logo.png';

const Header = () => (
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

export default hot(module)(CSSModules(Header, styles));
