// @flow
import { schema } from 'normalizr';

export const user = new schema.Entity('users');
export const repo = new schema.Entity('repos', {
  owner: user,
});

export const repos = new schema.Array(repo);
