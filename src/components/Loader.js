import styles from 'styles/components/Loader';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

class Loader extends Component {
  render() {
    return (
      <div styleName="spinner">
        <div styleName="bounce1"></div>
        <div styleName="bounce2"></div>
        <div></div>
      </div>
    );
  }
}

export default CSSModules(Loader, styles);
