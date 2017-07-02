// @flow
import { Observable, Action } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

const URL = 'https://randomuser.me/api/';

export const FETCH_RANDOM_USER = 'react-pack/ui/FETCH_RANDOM_USER';
export const FETCH_RANDOM_USER_SUCCESS = 'react-pack/ui/FETCH_RANDOM_USER_SUCCESS';
export const FETCH_RANDOM_USER_FAILURE = 'react-pack/ui/FETCH_RANDOM_USER_FAILURE';
export const FETCH_SECOND_RANDOM_USER = 'react-pack/ui/FETCH_SECOND_RANDOM_USER';
export const FETCH_SECOND_RANDOM_USER_SUCCESS = 'react-pack/ui/FETCH_SECOND_RANDOM_USER_SUCCESS';
export const FETCH_SECOND_RANDOM_USER_FAILURE = 'react-pack/ui/FETCH_SECOND_RANDOM_USER_FAILURE';

export const fetchRandomUser = (): ThunkAction => ({
  type: FETCH_RANDOM_USER,
  payload: {}
});

export const fetchRandomUserSuccess = (user: Object): ThunkAction => ({
  type: FETCH_RANDOM_USER_SUCCESS,
  payload: user
});

export const fetchSecondRandomUser = (user: Object): ThunkAction => ({
  type: FETCH_SECOND_RANDOM_USER,
  payload: user
});

export const fetchSecondRandomUserSuccess = (users: Array<Object>): ThunkAction => ({
  type: FETCH_SECOND_RANDOM_USER_SUCCESS,
  payload: {
    users
  }
});

export const fetchRandomUserEpic = (action$: Observable<Action>): Observable<Action> =>
  action$.ofType(FETCH_RANDOM_USER)
    .flatMap(() => ajax.getJSON(URL))
    .flatMap((response) => {
      const user = response.results[0];
      return Observable.concat(
        Observable.of(fetchRandomUserSuccess(user)),
        Observable.of(fetchSecondRandomUser(user)),
      );
    })
    .catch(e => Observable.of({
      type: FETCH_RANDOM_USER_FAILURE,
      payload: e
    }));

export const fetchSecondRandomUserEpic = (action$: Observable<Action>): Observable<Action> =>
  action$.ofType(FETCH_SECOND_RANDOM_USER)
    .flatMap(action =>
      ajax.getJSON(URL)
        .flatMap(response => {
          const users = [
            action.payload,
            response.results[0]
          ];
          return Observable.concat(
            Observable.of(fetchSecondRandomUserSuccess(users))
          );
        })
        .catch(e => Observable.of({
          type: FETCH_SECOND_RANDOM_USER_FAILURE,
          payload: e
        }))
    );

export const initialState: UsersState = {
  isLoading: false,
  isError: false,
  users: []
};

export default function reducer(state: UsersState = initialState, action: ThunkAction): UsersState {
  switch (action.type) {
    case FETCH_RANDOM_USER:
      return {
        ...initialState,
        isLoading: true
      };
    case FETCH_SECOND_RANDOM_USER_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        isLoading: false
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
