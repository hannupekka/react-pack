// @flow
import React from 'react';
import { pure } from 'recompose';
import type { Component } from 'recompose';
import { Map } from 'immutable';

type Props = {
  name: string,
  url: string,
  user: Map<string, any>
}

const Repo: Component<Props> = (props: Props): React$Element<any> => {
  return (
    <a
      href={props.url}
      title={`author: ${props.user.get('login')}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.name}
    </a>
  );
};

export default pure(Repo);
