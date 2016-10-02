// @flow
import styles from 'styles/components/Loader';
import React from 'react';
import CSSModules from 'react-css-modules';

const Loader = () => {
  return (
    <div>
      <div styleName="spinner"></div>
      <div styleName="text">Loading</div>
    </div>
  );
};

export default CSSModules(Loader, styles);
