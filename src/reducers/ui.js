import Immutable from 'immutable';

import {
  TOGGLE_GREETING
} from 'actions/actionCreators';

const initialState = Immutable.fromJS({
  showGreeting: false
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_GREETING:
      return state.merge({ showGreeting: !state.get('showGreeting') });
    default:
      return state;
  }
}
