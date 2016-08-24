import styles from 'styles/components/Loader';
import React from 'react';
import CSSModules from 'react-css-modules';

const Loader = () => {
  return (
    <div styleName="spinner">
      <div styleName="bounce1"></div>
      <div styleName="bounce2"></div>
      <div></div>
    </div>
  );
};

export default CSSModules(Loader, styles);
