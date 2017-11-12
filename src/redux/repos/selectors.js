// @flow
import { createSelector } from 'reselect';
import R from 'ramda';

export const getRepos = (state: RootState): Object => state.repos.entities.repos;
export const getUsers = (state: RootState): Object => state.repos.entities.users;
export const getShowForks = (state: RootState): boolean => state.repos.showForks;
export const isError = (state: RootState): boolean => state.repos.isError;
export const isLoading = (state: RootState): boolean => state.repos.isLoading;

export const getVisibleRepos = createSelector(
  [getRepos, getShowForks],
  (repos, showForks): Object => (showForks ? repos : R.pickBy(repo => !repo.fork, repos))
);
