import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import repos, { fetchReposLogic } from 'redux/modules/repo';
import ui from 'redux/modules/ui';
import users, { fetchRandomUserLogic, fetchSecondRandomUserLogic } from 'redux/modules/user';

export const rootReducer = combineReducers({
  repos,
  ui,
  users,
  router: routerReducer,
});

export const logics = [fetchReposLogic, fetchRandomUserLogic, fetchSecondRandomUserLogic];
