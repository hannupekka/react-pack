import styles from 'styles/components/Error.less';
import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

const Error = props => <div className={styles.error}>{props.message}</div>;

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: '',
};

export default pure(Error);
