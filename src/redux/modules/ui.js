// @flow
import { fromJS } from 'immutable';

export const TOGGLE_GREETING = 'react-pack/ui/TOGGLE_GREETING';

export const toggleGreeting = (): ActionType => {
  return {
    type: TOGGLE_GREETING,
    payload: {}
  };
};

export const initialState = fromJS({
  showGreeting: false
});

export default function reducer(state: StateType = initialState, action: ActionType): StateType {
  switch (action.type) {
    case TOGGLE_GREETING:
      return state.merge({ showGreeting: !state.get('showGreeting') });
    default:
      return state;
  }
}
