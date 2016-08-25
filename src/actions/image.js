import { CALL_API } from 'redux-api-middleware';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const CONFIG = require('../constants/config');

export const IMAGE_REQUEST = 'IMAGE_REQUEST';
export const IMAGE_SUCCESS = 'IMAGE_SUCCESS';
export const IMAGE_FAILURE = 'IMAGE_FAILURE';

// const requestImage = (tag) => {
//   return dispatch => {
//     dispatch({ type: REQUEST_IMAGE, payload: tag });
//     return fetch(`${CONFIG.API_HOST}/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${tag}`)
//       .then(UTILS.handleErrors)
//       .then(response => response.json())
//       .then(response => dispatch({ type: RECEIVE_IMAGE, payload: response }))
//       .catch(e => dispatch({ type: REQUEST_IMAGE_ERROR, error: e.toString() }));
//   };
// };

export const fetchImage = (tag) => {
  return {
    [CALL_API]: {
      endpoint: `${CONFIG.API_HOST}/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${tag}`,
      method: 'GET',
      types: [
        {
          type: IMAGE_REQUEST,
          payload: tag
        },
        IMAGE_SUCCESS,
        IMAGE_FAILURE
      ]
    }
  };
};
