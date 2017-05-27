// @flow
import { Map } from 'immutable';

export const TOGGLE_GREETING = 'react-pack/ui/TOGGLE_GREETING';

export const toggleGreeting = (): ThunkAction => {
  return {
    type: TOGGLE_GREETING,
    payload: {}
  };
};

type State = Map<string, any>;
export const initialState: State = Map({
  showGreeting: false
});

export default function reducer(state: State = initialState, action: ThunkAction): State {
  switch (action.type) {
    case TOGGLE_GREETING:
      return state.merge({ showGreeting: !state.get('showGreeting') });
    default:
      return state;
  }
}
