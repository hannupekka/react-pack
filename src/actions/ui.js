const TOGGLE_GREETING = 'TOGGLE_GREETING';
const REQUEST_DATA = 'FETCH_DATA';
const RECEIVE_DATA = 'RECEIVE_DATA';
const REQUEST_DATA_ERROR = 'REQUEST_ERROR';

const toggleGreeting = showGreeting => {
  return dispatch => dispatch({ type: TOGGLE_GREETING, payload: showGreeting });
};

const requestData = () => {
  return dispatch => {
    dispatch({ type: REQUEST_DATA });
    fetch('https://httpbin.org/get')
      .then(response => response.json())
      .then(response => dispatch({ type: RECEIVE_DATA, payload: response }))
      .catch(e => dispatch({ type: REQUEST_DATA_ERROR, error: e }));
  };
};

export {
  TOGGLE_GREETING,
  REQUEST_DATA,
  RECEIVE_DATA,
  REQUEST_DATA_ERROR,
  toggleGreeting,
  requestData
};
