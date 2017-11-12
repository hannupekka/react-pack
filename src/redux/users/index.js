import { createLogic } from 'redux-logic';

const URL = 'https://randomuser.me/api/';

export const FETCH_RANDOM_USER = 'react-pack/ui/FETCH_RANDOM_USER';
export const FETCH_RANDOM_USER_SUCCESS = 'react-pack/ui/FETCH_RANDOM_USER_SUCCESS';
export const FETCH_RANDOM_USER_FAILURE = 'react-pack/ui/FETCH_RANDOM_USER_FAILURE';
export const FETCH_SECOND_RANDOM_USER = 'react-pack/ui/FETCH_SECOND_RANDOM_USER';
export const FETCH_SECOND_RANDOM_USER_SUCCESS = 'react-pack/ui/FETCH_SECOND_RANDOM_USER_SUCCESS';
export const FETCH_SECOND_RANDOM_USER_FAILURE = 'react-pack/ui/FETCH_SECOND_RANDOM_USER_FAILURE';

export const fetchRandomUser = () => ({
  type: FETCH_RANDOM_USER,
  payload: {},
});

export const fetchRandomUserSuccess = user => ({
  type: FETCH_RANDOM_USER_SUCCESS,
  payload: user,
});

export const fetchSecondRandomUser = user => ({
  type: FETCH_SECOND_RANDOM_USER,
  payload: user,
});

export const fetchSecondRandomUserSuccess = users => ({
  type: FETCH_SECOND_RANDOM_USER_SUCCESS,
  payload: {
    users,
  },
});

//
export const fetchRandomUserLogic = createLogic({
  type: FETCH_RANDOM_USER,
  latest: true,
  async process(deps, dispatch, done) {
    try {
      const response = await fetch(URL);
      const json = await response.json();
      const user = json.results[0];

      dispatch(fetchRandomUserSuccess(user));
      dispatch(fetchSecondRandomUser(user));
    } catch (error) {
      dispatch({
        type: FETCH_RANDOM_USER_FAILURE,
        payload: error,
      });
    }

    return done();
  },
});

export const fetchSecondRandomUserLogic = createLogic({
  type: FETCH_SECOND_RANDOM_USER,
  latest: true,
  async process({ action }, dispatch, done) {
    try {
      const response = await fetch(URL);
      const json = await response.json();

      const users = [action.payload, json.results[0]];

      dispatch(fetchSecondRandomUserSuccess(users));
    } catch (error) {
      dispatch({
        type: FETCH_RANDOM_USER_FAILURE,
        payload: error,
      });
    }

    return done();
  },
});

export const initialState = {
  isLoading: false,
  isError: false,
  users: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RANDOM_USER:
      return {
        ...initialState,
        isLoading: true,
      };
    case FETCH_SECOND_RANDOM_USER_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        isLoading: false,
      };
    case FETCH_RANDOM_USER_FAILURE:
    case FETCH_SECOND_RANDOM_USER_FAILURE:
      return {
        ...initialState,
        isError: true,
      };
    default:
      return state;
  }
}
