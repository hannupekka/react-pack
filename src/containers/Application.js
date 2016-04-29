import styles from 'styles/containers/Application.less';
import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Header from 'components/Header';

class Application extends Component {
  render() {
    return (
      <div>
        <Header />
        <section styleName="content">
          {this.props.children}
        </section>
      </div>
    );
  }
}

Application.propTypes = {
  children: PropTypes.object
};

export default CSSModules(Application, styles);
