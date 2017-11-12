import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

const Repo = props => (
  <a href={props.url} title={`author: ${props.user}`} target="_blank" rel="noopener noreferrer">
    {props.name}
  </a>
);

Repo.propTypes = {
  url: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default pure(Repo);
