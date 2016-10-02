// @flow
import React from 'react';
import { pure } from 'recompose';

type Props = {
  src?: string
}

const Image = ({ src }: Props) => {
  if (!src) {
    return null;
  }

  return (
    <img src={src} role="presentation" />
  );
};

export default pure(Image);
