import React, { Component, PropTypes } from 'react';
import { pure } from 'recompose';

class Image extends Component {
  render() {
    const { src } = this.props;

    if (!src) {
      return null;
    }

    return (
      <img src={src} role="presentation" />
    );
  }
}

Image.propTypes = {
  src: PropTypes.string
};

export default pure(Image);
