// @flow
import React from 'react';

type Props = {
  src?: string | Object
}

const Image = ({ src }: Props): ?ElementType => {
  if (!src) {
    return null;
  }

  return (
    <img src={src} role="presentation" />
  );
};

export default Image;
