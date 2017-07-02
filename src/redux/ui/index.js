// @flow
export const TOGGLE_GREETING = 'react-pack/ui/TOGGLE_GREETING';

export const toggleGreeting = (): ThunkAction => ({
  type: TOGGLE_GREETING,
  payload: {}
});

export const initialState: UiState = {
  showGreeting: false
};

export default function reducer(state: UiState = initialState, action: ThunkAction): UiState {
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
