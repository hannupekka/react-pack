// @flow
import styles from 'styles/containers/Application';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Header from 'components/Header';

type Props = {
  children: React$Element<*> | Array<React$Element<*>>
}

// eslint-disable-next-line react/prefer-stateless-function
class Application extends Component {
  props: Props;
  render(): React$Element<*> {
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

export default CSSModules(Application, styles);
