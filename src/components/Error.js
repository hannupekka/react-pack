import styles from 'styles/components/Error';
import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

const Error = ({ message }) => {
  return (
    <div styleName="error">
      {message}
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export default CSSModules(Error, styles);
