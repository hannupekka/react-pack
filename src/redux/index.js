// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import repos, { fetchReposLogic } from 'redux/repos';
import ui from 'redux/ui';
import users, { fetchRandomUserLogic, fetchSecondRandomUserLogic } from 'redux/users';

export const rootReducer = combineReducers({
  repos,
  ui,
  users,
  router: routerReducer,
});

export const logics = [
  fetchReposLogic,
  fetchRandomUserLogic,
  fetchSecondRandomUserLogic,
];
