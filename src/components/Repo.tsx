import * as React from 'react';
import { pure } from 'recompose';

interface Props {
  url: string;
  user: string;
  name: string;
}

const Repo = (props: Props) => (
  <a href={props.url} title={`author: ${props.user}`} target="_blank" rel="noopener noreferrer">
    {props.name}
  </a>
);

export default pure(Repo);
