// @flow
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer } from 'react-router-redux';
import repos, { fetchReposEpic } from 'redux/modules/repos';
import ui from 'redux/modules/ui';

export const rootReducer = combineReducers({
  repos,
  ui,
  router: routerReducer
});

export const rootEpic = combineEpics(
  fetchReposEpic
);
