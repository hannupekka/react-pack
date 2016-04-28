const TOGGLE_GREETING = 'TOGGLE_GREETING';

const toggleGreeting = () => {
  return dispatch => dispatch({ type: TOGGLE_GREETING });
};

export {
  TOGGLE_GREETING,
  toggleGreeting
};
