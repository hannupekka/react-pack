import { normalize } from 'normalizr';
import { repos } from 'redux/modules/repo/schemas';
import { API_HOST } from 'constants/config';

export const FETCH_REPOS = 'react-pack/repos/FETCH_REPOS';
export const FETCH_REPOS_SUCCESS = 'react-pack/repos/FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'react-pack/repos/FETCH_REPOS_FAILURE';
export const TOGGLE_SHOW_FORKS = 'react-pack/repos/TOGGLE_SHOW_FORKS';

export const toggleShowForks = () => ({
  type: TOGGLE_SHOW_FORKS,
  payload: {},
});

export const fetchRepos = username => async dispatch => {
  await dispatch({
    type: FETCH_REPOS,
    payload: { username },
  });

  try {
    const response = await fetch(`${API_HOST}/users/${username}/repos`);
    const json = await response.json();

    return dispatch({
      type: FETCH_REPOS_SUCCESS,
      payload: normalize(json, repos),
    });
  } catch (error) {
    return dispatch({
      type: FETCH_REPOS_FAILURE,
      payload: error,
    });
  }
};

export const initialState = {
  isLoading: false,
  isError: false,
  showForks: true,
  entities: {
    repos: {},
    users: {},
  },
  result: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPOS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        entities: action.payload.entities,
        result: action.payload.result,
        isLoading: false,
      };
    case FETCH_REPOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        entities: initialState.entities,
        result: initialState.result,
      };
    case TOGGLE_SHOW_FORKS:
      return {
        ...state,
        showForks: !state.showForks,
      };
    default:
      return state;
  }
}
