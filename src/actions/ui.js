require('es6-promise').polyfill();
require('isomorphic-fetch');

export const TOGGLE_GREETING = 'TOGGLE_GREETING';

export const toggleGreeting = () => {
  return dispatch => dispatch({ type: TOGGLE_GREETING });
};
