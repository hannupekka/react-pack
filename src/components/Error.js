import styles from 'styles/error.less';
import React from 'react';
import CSSModules from 'react-css-modules';

const Error = ({ message }) => {
  return (
    <div styleName="error">
      {message}
    </div>
  );
};

export default CSSModules(Error, styles);;
