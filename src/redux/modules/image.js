// @flow
import { fromJS, Map } from 'immutable';
import { Observable, Action } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { get } from 'lodash';
import { API_HOST } from 'constants/config';

export const FETCH_IMAGE = 'react-pack/image/FETCH_IMAGE';
export const FETCH_IMAGE_SUCCESS = 'react-pack/image/FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_FAILURE = 'react-pack/image/FETCH_IMAGE_FAILURE';
export const SET_IMAGE_URL = 'react-pack/image/SET_IMAGE_URL';

export const fetchImage = (tag: string): ThunkAction => ({
  type: FETCH_IMAGE,
  payload: { tag }
});

export const fetchImageSuccess = (payload: Object): ThunkAction => ({
  type: FETCH_IMAGE_SUCCESS,
  payload
});

export const setImageUrl = (payload: Object): ThunkAction => ({
  type: SET_IMAGE_URL,
  payload
});

export const fetchImageEpic = (action$: Observable<Action>): Observable<Action> =>
  action$.ofType(FETCH_IMAGE)
    .flatMap(action =>
      ajax.getJSON(`${API_HOST}/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${action.payload.tag}`)
        .flatMap(response => Observable.concat(
          Observable.of(fetchImageSuccess(response)),
          Observable.of(setImageUrl(response))
        ))
        .catch(() => Observable.of({
          type: FETCH_IMAGE_FAILURE
        }))
    );

type State = Map<string, any>;
export const initialState: State = fromJS({
  isLoading: false,
  isError: false,
  src: '',
  url: ''
});

export default function reducer(state: State = initialState, action: ThunkAction): State {
  switch (action.type) {
    case FETCH_IMAGE:
      return state.merge({ isLoading: true, isError: false });
    case FETCH_IMAGE_SUCCESS:
      return state.merge({
        isLoading: false,
        isError: false,
        src: get(action, 'payload.data.fixed_height_downsampled_url')
      });
    case FETCH_IMAGE_FAILURE:
      return state.merge({ isLoading: false, isError: true });
    case SET_IMAGE_URL:
      return state.set('url', get(action, 'payload.data.url'));
    default:
      return state;
  }
}
