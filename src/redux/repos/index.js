// @flow
import { Observable, Action } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { normalize } from 'normalizr';
import { repos } from 'redux/repos/schemas';
import { API_HOST } from 'constants/config';

export const FETCH_REPOS = 'react-pack/repos/FETCH_REPOS';
export const FETCH_REPOS_SUCCESS = 'react-pack/repos/FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'react-pack/repos/FETCH_REPOS_FAILURE';
export const TOGGLE_SHOW_FORKS = 'react-pack/repos/TOGGLE_SHOW_FORKS';

export const fetchRepos = (username: string): ThunkAction => ({
  type: FETCH_REPOS,
  payload: { username },
});

export const fetchReposSuccess = (payload: Object): ThunkAction => ({
  type: FETCH_REPOS_SUCCESS,
  payload,
});

export const toggleShowForks = (): ThunkAction => ({
  type: TOGGLE_SHOW_FORKS,
  payload: {},
});

export const fetchReposEpic = (action$: Observable<Action>): Observable<Action> =>
  action$.ofType(FETCH_REPOS)
    .flatMap(action =>
      ajax.getJSON(`${API_HOST}/users/${action.payload.username}/repos`)
        .flatMap(response =>
          Observable.of(fetchReposSuccess(normalize(response, repos)))
        )
        .catch(e => Observable.of({
          type: FETCH_REPOS_FAILURE,
          payload: e,
        }))
    );

export const initialState: ReposState = {
  isLoading: false,
  isError: false,
  showForks: true,
  entities: {
    repos: {},
    users: {},
  },
  result: [],
};

export default function reducer(state: ReposState = initialState, action: ThunkAction): ReposState {
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
