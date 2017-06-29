// @flow
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer } from 'react-router-redux';
import repos, { fetchReposEpic } from 'redux/repos';
import ui from 'redux/ui';

export const rootReducer = combineReducers({
  repos,
  ui,
  router: routerReducer
});

export const rootEpic = combineEpics(fetchReposEpic);
