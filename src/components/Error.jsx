import styles from 'styles/components/Error.less';
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

const Error = props => <div styleName="error">{props.message}</div>;

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: '',
};

export default CSSModules(Error, styles);
