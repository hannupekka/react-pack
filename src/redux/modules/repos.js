// @flow
import { List, Map } from 'immutable';
import { Observable, Action } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { normalize } from 'normalizr';
import { repos } from 'redux/schemas/repos';
import { API_HOST } from 'constants/config';

export const FETCH_REPOS = 'react-pack/repos/FETCH_REPOS';
export const FETCH_REPOS_SUCCESS = 'react-pack/repos/FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'react-pack/repos/FETCH_REPOS_FAILURE';
export const TOGGLE_SHOW_FORKS = 'react-pack/repos/TOGGLE_SHOW_FORKS';

export const fetchRepos = (username: string): ThunkAction => ({
  type: FETCH_REPOS,
  payload: { username }
});

export const fetchReposSuccess = (payload: Object): ThunkAction => ({
  type: FETCH_REPOS_SUCCESS,
  payload
});

export const toggleShowForks = (): ThunkAction => ({
  type: TOGGLE_SHOW_FORKS,
  payload: {}
});

export const fetchReposEpic = (action$: Observable<Action>): Observable<Action> =>
  action$.ofType(FETCH_REPOS)
    .flatMap(action =>
      ajax.getJSON(`${API_HOST}/users/${action.payload.username}/repos`)
        .flatMap(response =>
          Observable.of(fetchReposSuccess(normalize(response, repos)))
        )
        .catch(() => Observable.of({
          type: FETCH_REPOS_FAILURE
        }))
    );

type State = Map<string, any>;
export const initialState: State = Map({
  isLoading: false,
  isError: false,
  showForks: true,
  entities: {
    repos: Map(),
    users: Map()
  },
  result: List()
});

export default function reducer(state: State = initialState, action: ThunkAction): State {
  switch (action.type) {
    case FETCH_REPOS:
      return initialState.set('isLoading', true);
    case FETCH_REPOS_SUCCESS:
      return initialState.merge({
        entities: action.payload.entities,
        result: action.payload.result
      });
    case FETCH_REPOS_FAILURE:
      return initialState.set('isError', true);
    case TOGGLE_SHOW_FORKS:
      return state.set('showForks', !state.get('showForks'));
    default:
      return state;
  }
}
