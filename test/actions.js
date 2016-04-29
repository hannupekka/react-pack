const CONFIG = require('../src/constants/config');
const fetchMock = require('fetch-mock');
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'
import * as UiActions from '../src/actions/ui';
import * as ImageActions from '../src/actions/image';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('UI actions', () => {
  it('should create an action to toggle greeting message', () => {
    const expectedAction = {
      type: UiActions.TOGGLE_GREETING
    }

    const store = mockStore({});
    expect(store.dispatch(UiActions.toggleGreeting())).toEqual(expectedAction);
  })
})

describe('Image actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create an action to fetch random image', () => {
    fetchMock.mock(CONFIG.API_HOST + '/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=coffee', {
      caption: 'this is coffee'
    });

    const expectedActions = [
      { type: ImageActions.REQUEST_IMAGE, payload: 'coffee' },
      { type: ImageActions.RECEIVE_IMAGE, payload: {
        caption: 'this is coffee'
      }}
    ];

    const store = mockStore();
    return store.dispatch(ImageActions.requestImage('coffee'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should create an failing action when response is error', () => {
    fetchMock.mock(CONFIG.API_HOST + '/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=coffee', 400);

    const expectedActions = [
      { type: ImageActions.REQUEST_IMAGE, payload: 'coffee' },
      { type: ImageActions.REQUEST_IMAGE_ERROR, error: 'Error: Bad Request' }
    ];

    const store = mockStore();
    return store.dispatch(ImageActions.requestImage('coffee'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
