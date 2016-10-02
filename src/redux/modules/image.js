import { CALL_API } from 'redux-api-middleware';
import { fromJS } from 'immutable';
import { API_HOST } from 'constants/config';

export const IMAGE_REQUEST = 'react-pack/image/IMAGE_REQUEST';
export const IMAGE_SUCCESS = 'react-pack/image/IMAGE_SUCCESS';
export const IMAGE_FAILURE = 'react-pack/image/IMAGE_FAILURE';

export const fetchImage = (tag) => {
  return {
    [CALL_API]: {
      endpoint: `${API_HOST}/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${tag}`,
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

export const initialState = fromJS({
  isLoading: false,
  isError: false,
  image: {},
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case IMAGE_REQUEST:
      return state.merge({ isLoading: true, isError: false });
    case IMAGE_SUCCESS:
      return state.merge({
        isLoading: false,
        isError: false,
        image: action.payload.data
      });
    case IMAGE_FAILURE:
      return state.merge({ isLoading: false, isError: true });
    default:
      return state;
  }
}
