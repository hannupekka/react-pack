// @flow
import { fromJS, Map } from 'immutable';
import { API_HOST } from 'constants/config';
import { Observable, Action } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { get } from 'lodash';

export const FETCH_IMAGE = 'react-pack/image/FETCH_IMAGE';
export const FETCH_IMAGE_SUCCESS = 'react-pack/image/FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_FAILURE = 'react-pack/image/FETCH_IMAGE_FAILURE';

export const fetchImage = (tag: string): ThunkAction => ({
  type: FETCH_IMAGE,
  payload: { tag }
});

export const fetchImageSuccess = (image: Object): ThunkAction => ({
  type: FETCH_IMAGE_SUCCESS,
  payload: { image }
});

export const fetchImageEpic = (action$: Observable<Action>): Observable<Action> =>
  action$.ofType(FETCH_IMAGE)
    .mergeMap(action =>
      ajax.getJSON(`${API_HOST}/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${action.payload.tag}`)
        .map(response => fetchImageSuccess(response))
        .catch(() => Observable.of({
          type: FETCH_IMAGE_FAILURE
        }))
    );

type State = Map<string, any>;
export const initialState: State = fromJS({
  isLoading: false,
  isError: false,
  image: {},
});

export default function reducer(state: State = initialState, action: ThunkAction): State {
  switch (action.type) {
    case FETCH_IMAGE:
      return state.merge({ isLoading: true, isError: false });
    case FETCH_IMAGE_SUCCESS:
      return state.merge({
        isLoading: false,
        isError: false,
        image: get(action, 'payload.image.data')
      });
    case FETCH_IMAGE_FAILURE:
      return state.merge({ isLoading: false, isError: true });
    default:
      return state;
  }
}
