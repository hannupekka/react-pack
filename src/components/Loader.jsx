import styles from 'styles/components/Loader.less';
import React from 'react';
import { pure } from 'recompose';

const Loader = () => (
  <div>
    <div className={styles.spinner} />
    <div className={styles.text}>Loading</div>
  </div>
);

export default pure(Loader);
