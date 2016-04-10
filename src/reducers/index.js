import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from 'reducers/ui';
import image from 'reducers/image';

const rootReducer = combineReducers({
  ui,
  image,
  routing: routerReducer
});

export default rootReducer;
