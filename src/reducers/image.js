import Immutable from 'immutable';

import {
  REQUEST_IMAGE,
  RECEIVE_IMAGE,
  REQUEST_IMAGE_ERROR
} from 'actions/actionCreators';

const initialState = Immutable.fromJS({
  isLoading: false,
  isError: false,
  image: {},
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGE:
      return state.merge({ isLoading: true, isError: false });
    case RECEIVE_IMAGE:
      return state.merge({
        isLoading: false,
        isError: false,
        image: Immutable.fromJS(action.payload.data)
      });
    case REQUEST_IMAGE_ERROR:
      return state.merge({ isLoading: false, isError: true });
    default:
      return state;
  }
}
