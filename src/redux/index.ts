import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import repos, { fetchReposLogic } from '@app/redux/repos';
import ui from '@app/redux/ui';
import users, { fetchRandomUserLogic, fetchSecondRandomUserLogic } from '@app/redux/users';

export const rootReducer = combineReducers({
  repos,
  ui,
  users,
  router: routerReducer,
});

export const logics = [fetchReposLogic, fetchRandomUserLogic, fetchSecondRandomUserLogic];
