import { normalize } from 'normalizr';
import { createLogic } from 'redux-logic';
import { repos } from '@app/redux/repos/schemas';
import { API_HOST } from '@app/constants/config';
import { TDispatch, IRepo, IRepoState } from '@app/types';

type FETCH_REPOS = 'react-pack/repos/FETCH_REPOS';
type FETCH_REPOS_SUCCESS = 'react-pack/repos/FETCH_REPOS_SUCCESS';
type FETCH_REPOS_FAILURE = 'react-pack/repos/FETCH_REPOS_FAILURE';
type TOGGLE_SHOW_FORKS = 'react-pack/repos/TOGGLE_SHOW_FORKS';

interface fetchRepos {
  type: FETCH_REPOS;
  payload: {
    username: string;
  };
}

interface fetchReposPayload {
  entities: {
    [id: string]: IRepo;
  };
  result: Array<String>;
}

interface fetchReposSuccess {
  type: FETCH_REPOS_SUCCESS;
  payload: fetchReposPayload;
}

interface fetchReposFailure {
  type: FETCH_REPOS_FAILURE;
  payload: {};
}

interface toggleShowForks {
  type: TOGGLE_SHOW_FORKS;
  payload: {};
}

export const FETCH_REPOS = 'react-pack/repos/FETCH_REPOS';
export const FETCH_REPOS_SUCCESS = 'react-pack/repos/FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'react-pack/repos/FETCH_REPOS_FAILURE';
export const TOGGLE_SHOW_FORKS = 'react-pack/repos/TOGGLE_SHOW_FORKS';

export const fetchRepos = (username: string) => ({
  type: FETCH_REPOS,
  payload: { username },
});

export const fetchReposSuccess = (payload: fetchReposPayload) => ({
  type: FETCH_REPOS_SUCCESS,
  payload,
});

export const toggleShowForks = () => ({
  type: TOGGLE_SHOW_FORKS,
  payload: {},
});

export const fetchReposLogic = createLogic({
  type: FETCH_REPOS,
  latest: true,
  async process({ action }: { action: fetchRepos }, dispatch: TDispatch, done: Function) {
    try {
      const response = await fetch(`${API_HOST}/users/${action.payload.username}/repos`);
      const json = await response.json();

      dispatch(fetchReposSuccess(normalize(json, repos)));
    } catch (error) {
      dispatch({
        type: FETCH_REPOS_FAILURE,
        payload: error,
      });
    }

    return done();
  },
});

export const initialState: IRepoState = {
  isLoading: false,
  isError: false,
  showForks: true,
  entities: {
    repos: {},
    users: {},
  },
  result: [],
};

type TAction = fetchRepos | fetchReposSuccess | fetchReposFailure | toggleShowForks;
export default function reducer(state: IRepoState = initialState, action: TAction) {
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
