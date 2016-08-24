import styles from 'styles/components/Error';
import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';

class Error extends Component {
  render() {
    const { message } = this.props;

    return (
      <div styleName="error">
        {message}
      </div>
    );
  }
}

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export default CSSModules(Error, styles);
