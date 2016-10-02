// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import image from 'redux/modules/image';
import ui from 'redux/modules/ui';

const rootReducer = combineReducers({
  image,
  ui,
  routing: routerReducer
});

export default rootReducer;
