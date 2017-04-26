// @flow
import { createSelector } from 'reselect';

const getRepos = store => store.repos.getIn(['entities', 'repos']);
const getShowForks = store => store.repos.get('showForks');

export default createSelector(
  [getRepos, getShowForks],
  (repos, showForks) => {
    return showForks ? repos : repos.filterNot(repo => repo.get('fork'));
  }
);
