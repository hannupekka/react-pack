import styles from '@app/styles/components/Header.less';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { pure } from 'recompose';

const logo = require('../assets/logo.png');

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Example application</h1>
    <img className={styles.logo} src={logo} alt="" />
    <nav className={styles.navigation}>
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

export default pure(Header);
