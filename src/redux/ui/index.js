export const TOGGLE_GREETING = 'react-pack/ui/TOGGLE_GREETING';

export const toggleGreeting = () => ({
  type: TOGGLE_GREETING,
  payload: {},
});

export const initialState = {
  showGreeting: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_GREETING:
      return {
        ...state,
        showGreeting: !state.showGreeting,
      };
    default:
      return state;
  }
}
