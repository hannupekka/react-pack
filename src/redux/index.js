import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import repos from 'redux/modules/repo';
import ui from 'redux/modules/ui';
import users from 'redux/modules/user';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  repos,
  ui,
  users,
  router: routerReducer,
});
