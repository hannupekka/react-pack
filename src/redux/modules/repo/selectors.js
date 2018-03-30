import { createSelector } from 'reselect';
import pickBy from 'lodash/pickBy';

export const getRepos = state => state.repos.entities.repos;
export const getUsers = state => state.repos.entities.users;
export const getShowForks = state => state.repos.showForks;
export const getIsError = state => state.repos.isError;
export const getIsLoading = state => state.repos.isLoading;

export const getVisibleRepos = createSelector(
  [getRepos, getShowForks],
  (repos, showForks) => (showForks ? repos : pickBy(repos, repo => !repo.fork))
);
