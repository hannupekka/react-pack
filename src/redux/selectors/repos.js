// @flow
import { createSelector } from 'reselect';
import { Map } from 'immutable';

const getRepos = (state: State): Map<string, any> => state.repos.getIn(['entities', 'repos']);
const getShowForks = (state: State): boolean => state.repos.get('showForks');

export default createSelector(
  [getRepos, getShowForks],
  (repos, showForks): Map<string, any> => {
    return showForks ? repos : repos.filterNot(repo => repo.get('fork'));
  }
);
