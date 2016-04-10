import Immutable from 'immutable';

import {
  TOGGLE_GREETING
} from 'actions/ui';

const initialState = Immutable.fromJS({
  showGreeting: false
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_GREETING:
      return state.merge({ showGreeting: action.payload });
    default:
      return state;
  }
}
