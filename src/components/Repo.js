// @flow
import React from 'react';
import { pure } from 'recompose';
import type { Component } from 'recompose';

type Props = {
  name: string,
  url: string
}

const Repo: Component<Props> = (props: Props): React$Element<any> => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a>
  );
};

export default pure(Repo);
