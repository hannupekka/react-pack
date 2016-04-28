import { API_URL } from 'constants/config';
const REQUEST_IMAGE = 'FETCH_IMAGE';
const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
const REQUEST_IMAGE_ERROR = 'REQUEST_IMAGE_ERROR';

const requestImage = (tag) => {
  return dispatch => {
    dispatch({ type: REQUEST_IMAGE, payload: tag });
    fetch(API_URL + tag)
      .then(response => response.json())
      .then(response => dispatch({ type: RECEIVE_IMAGE, payload: response.data }))
      .catch(e => dispatch({ type: REQUEST_IMAGE_ERROR, error: e }));
  };
};

export {
  REQUEST_IMAGE,
  RECEIVE_IMAGE,
  REQUEST_IMAGE_ERROR,
  requestImage
};
