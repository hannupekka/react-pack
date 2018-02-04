import { IUIState } from '@app/types';
type TOGGLE_GREETING = 'react-pack/ui/TOGGLE_GREETING';
export const TOGGLE_GREETING = 'react-pack/ui/TOGGLE_GREETING';

interface toggleGreeting {
  type: TOGGLE_GREETING;
  payload: {};
}

export const toggleGreeting = () => ({
  type: TOGGLE_GREETING,
  payload: {},
});

export const initialState: IUIState = {
  showGreeting: false,
};

type TAction = toggleGreeting;

export default function reducer(state: IUIState = initialState, action: TAction) {
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
