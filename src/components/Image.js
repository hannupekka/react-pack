import React, { PropTypes } from 'react';
import { pure } from 'recompose';

const Image = ({ src }) => {
  if (!src) {
    return null;
  }

  return (
    <img src={src} />
  );
};

Image.propTypes = {
  src: PropTypes.string
}

export default pure(Image);
