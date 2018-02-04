import styles from '@app/styles/components/Error.less';
import * as React from 'react';
import { pure } from 'recompose';

interface Props {
  message: string;
}

const Error = (props: Props) => <div className={styles.error}>{props.message}</div>;

export default pure(Error);
