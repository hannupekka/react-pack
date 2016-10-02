// @flow

import styles from 'styles/containers/Application';
import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Header from 'components/Header';

// eslint-disable-next-line react/prefer-stateless-function
class Application extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        <section styleName="content">
          {children}
        </section>
      </div>
    );
  }
}

Application.propTypes = {
  children: PropTypes.object
};

export default CSSModules(Application, styles);
