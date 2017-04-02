// @flow
import React from 'react';
import { pure } from 'recompose';
import type { Component } from 'recompose';

type Props = {
  src: string
}

const Image: Component<Props> = (props: Props): ?React$Element<any> => {
  if (!props.src) {
    return null;
  }

  return (
    <img src={props.src} alt="" />
  );
};

export default pure(Image);
