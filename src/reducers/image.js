import Immutable from 'immutable';

import {
  IMAGE_REQUEST,
  IMAGE_SUCCESS,
  IMAGE_FAILURE
} from 'actions/image';

const initialState = Immutable.fromJS({
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
