import { createSelector } from 'reselect';
import pickBy from 'lodash-es/pickBy';
import { IRootState, IRepo } from '@app/types';

export const getRepos = (state: IRootState) => state.repos.entities.repos;
export const getUsers = (state: IRootState) => state.repos.entities.users;
export const getShowForks = (state: IRootState) => state.repos.showForks;
export const getIsError = (state: IRootState) => state.repos.isError;
export const getIsLoading = (state: IRootState) => state.repos.isLoading;

export const getVisibleRepos = createSelector(
  [getRepos, getShowForks],
  (repos, showForks) => (showForks ? repos : pickBy(repos, (repo: IRepo) => !repo.fork))
);
