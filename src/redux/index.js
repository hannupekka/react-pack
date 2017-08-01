// @flow
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer } from 'react-router-redux';
import repos, { fetchReposEpic } from 'redux/repos';
import ui from 'redux/ui';
import users, { fetchRandomUserEpic, fetchSecondRandomUserEpic } from 'redux/users';

export const rootReducer = combineReducers({
  repos,
  ui,
  users,
  router: routerReducer,
});

export const rootEpic = combineEpics(
  fetchReposEpic,
  fetchRandomUserEpic,
  fetchSecondRandomUserEpic
);
