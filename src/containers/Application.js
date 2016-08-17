import styles from 'styles/containers/Application.less';
import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import Header from 'components/Header';

const Application = ({ children }) => {
  return (
    <div>
      <Header />
      <section styleName="content">
        {children}
      </section>
    </div>
  );
};

Application.propTypes = {
  children: PropTypes.object
};

export default CSSModules(Application, styles);
