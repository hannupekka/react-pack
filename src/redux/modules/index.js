// @flow
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer } from 'react-router-redux';
import image, { fetchImageEpic } from 'redux/modules/image';
import ui from 'redux/modules/ui';

export const rootReducer = combineReducers({
  image,
  ui,
  router: routerReducer
});

export const rootEpic = combineEpics(
  fetchImageEpic
);
