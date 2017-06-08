import { pickBy } from 'lodash';
// @flow
import { createSelector } from 'reselect';

const getRepos = (state: State): Object => state.repos.entities.repos;
const getShowForks = (state: State): boolean => state.repos.showForks;

export default createSelector(
  [getRepos, getShowForks],
  (repos, showForks): Object => {
    return showForks ? repos : pickBy(repos, repo => !repo.fork);
  }
);
