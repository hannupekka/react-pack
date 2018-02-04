import styles from '@app/styles/components/Loader.less';
import * as React from 'react';
import { pure } from 'recompose';

const Loader = () => (
  <div>
    <div className={styles.spinner} />
    <div className={styles.text}>Loading</div>
  </div>
);

export default pure(Loader);
