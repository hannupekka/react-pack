const TOGGLE_GREETING = 'TOGGLE_GREETING';

const toggleGreeting = showGreeting => {
  return dispatch => dispatch({ type: TOGGLE_GREETING, payload: showGreeting });
};

export {
  TOGGLE_GREETING,
  toggleGreeting
};
