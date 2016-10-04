// @flow
import React from 'react';
import { pure } from 'recompose';
import type { Component } from 'recompose';

type Props = {
  src?: string | Object
}

const Image: Component<Props> = (props: Props): ?ElementType => {
  if (!props.src) {
    return null;
  }

  return (
    <img src={props.src} role="presentation" />
  );
};

export default pure(Image);
