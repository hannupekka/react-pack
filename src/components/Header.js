import styles from 'styles/header.less';
import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

const Header = () => {
  return (
    <header styleName="header">
      <h1>Example application</h1>
      <img src={require('../assets/logo.png')} />
      <nav>
        <ul>
          <li><Link to={'/'}>Index</Link></li>
          <li><Link to={'/image'}>Image</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default CSSModules(Header, styles);
