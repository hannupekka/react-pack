require('es6-promise').polyfill();
require('isomorphic-fetch');
const CONFIG = require('../constants/config');
const UTILS = require('../utils/http');

const REQUEST_IMAGE = 'FETCH_IMAGE';
const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
const REQUEST_IMAGE_ERROR = 'REQUEST_IMAGE_ERROR';
const TOGGLE_GREETING = 'TOGGLE_GREETING';

const requestImage = (tag) => {
  return dispatch => {
    dispatch({ type: REQUEST_IMAGE, payload: tag });
    return fetch(`${CONFIG.API_HOST}/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${tag}`)
      .then(UTILS.handleErrors)
      .then(response => response.json())
      .then(response => dispatch({ type: RECEIVE_IMAGE, payload: response }))
      .catch(e => dispatch({ type: REQUEST_IMAGE_ERROR, error: e.toString() }));
  };
};

const toggleGreeting = () => {
  return dispatch => dispatch({ type: TOGGLE_GREETING });
};

export {
  REQUEST_IMAGE,
  RECEIVE_IMAGE,
  REQUEST_IMAGE_ERROR,
  TOGGLE_GREETING,
  requestImage,
  toggleGreeting
};
