import { fromJS } from 'immutable';

export const TOGGLE_GREETING = 'react-pack/ui/TOGGLE_GREETING';

export const toggleGreeting = () => {
  return dispatch => dispatch({ type: TOGGLE_GREETING });
};

export const initialState = fromJS({
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
