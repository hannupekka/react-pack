import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import nock from 'nock';
import { API_HOST } from 'constants/config';
import reducer, * as Image from 'redux/modules/image';

const epicMiddleware = createEpicMiddleware(Image.fetchImageEpic);
const middlewares = [thunkMiddleware, epicMiddleware];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create an action for fetching image', () => {
    const image = {
      src: 'coffee.jpg'
    };

    nock(API_HOST)
      .get('/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=coffee')
      .reply(200, { image });

    const expected = [
      {
        type: Image.FETCH_IMAGE,
        payload: {
          tag: 'coffee'
        }
      }
    ];

    const store = mockStore();
    store.dispatch(Image.fetchImage('coffee'));
    expect(store.getActions()).toEqual(expected);
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(Image.initialState);
  });

  it('should handle FETCH_IMAGE', () => {
    const action = {
      type: Image.FETCH_IMAGE,
      payload: {
        tag: 'foobar'
      }
    };

    const expected = Image.initialState.merge({
      isLoading: true,
      isError: false
    });

    expect(
      reducer(Image.initialState, action)
    ).toEqual(expected);
  });

  it('should handle FETCH_IMAGE_SUCCESS', () => {
    const action = {
      type: Image.FETCH_IMAGE_SUCCESS,
      payload: {
        image: {
          data: 'foobar.png'
        }
      }
    };

    const expected = Image.initialState.merge({
      isLoading: false,
      isError: false,
      image: 'foobar.png'
    });

    expect(
      reducer(Image.initialState, action)
    ).toEqual(expected);
  });

  it('should handle FETCH_IMAGE_FAILURE', () => {
    const action = {
      type: Image.FETCH_IMAGE_FAILURE,
      payload: {}
    };

    const expected = Image.initialState.merge({
      isLoading: false,
      isError: true
    });

    expect(
      reducer(Image.initialState, action)
    ).toEqual(expected);
  });
});
