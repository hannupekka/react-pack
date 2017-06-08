// @flow
export const TOGGLE_GREETING = 'react-pack/ui/TOGGLE_GREETING';

export const toggleGreeting = (): ThunkAction => {
  return {
    type: TOGGLE_GREETING,
    payload: {}
  };
};

type State = Object;
export const initialState: State = {
  showGreeting: false
};

export default function reducer(state: State = initialState, action: ThunkAction): State {
  switch (action.type) {
    case TOGGLE_GREETING:
      return {
        ...state,
        showGreeting: !state.showGreeting
      };
    default:
      return state;
  }
}
