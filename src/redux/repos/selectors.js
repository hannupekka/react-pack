// @flow
import { createSelector } from 'reselect';
import R from 'ramda';

const getRepos = (state: RootState): Object => state.repos.entities.repos;
const getShowForks = (state: RootState): boolean => state.repos.showForks;

export default createSelector(
  [getRepos, getShowForks],
  (repos, showForks): Object => {
    return showForks ? repos : R.pickBy(repo => !repo.fork, repos);
  }
);
