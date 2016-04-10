import Immutable from 'immutable';

import {
  TOGGLE_GREETING,
  REQUEST_DATA,
  RECEIVE_DATA,
  REQUEST_DATA_ERROR
} from 'actions/ui';

const initialState = Immutable.fromJS({
  showGreeting: false,
  isLoading: false,
  isError: false,
  data: {},
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_GREETING:
      return state.merge({ showGreeting: !state.showGreeting });
    case REQUEST_DATA:
      return state.merge({ isLoading: true, isError: false });
    case RECEIVE_DATA:
      return state.merge({
        isLoading: false,
        isError: false,
        data: Immutable.fromJS(action.payload)
      });
    case REQUEST_DATA_ERROR:
      return state.merge({ isLoading: false, isError: true });
    default:
      return state;
  }
}
