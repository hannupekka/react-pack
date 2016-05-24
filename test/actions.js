const CONFIG = require('../src/constants/config');
const fetchMock = require('fetch-mock');
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'
import * as actionCreators from '../src/actions/actionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('UI actions', () => {
  it('should create an action to toggle greeting message', () => {
    const expectedAction = {
      type: actionCreators.TOGGLE_GREETING
    }

    const store = mockStore({});
    expect(store.dispatch(actionCreators.toggleGreeting())).toEqual(expectedAction);
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
      { type: actionCreators.REQUEST_IMAGE, payload: 'coffee' },
      { type: actionCreators.RECEIVE_IMAGE, payload: {
        caption: 'this is coffee'
      }}
    ];

    const store = mockStore();
    return store.dispatch(actionCreators.requestImage('coffee'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should create an failing action when response is error', () => {
    fetchMock.mock(CONFIG.API_HOST + '/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=coffee', 400);

    const expectedActions = [
      { type: actionCreators.REQUEST_IMAGE, payload: 'coffee' },
      { type: actionCreators.REQUEST_IMAGE_ERROR, error: 'Error: Bad Request' }
    ];

    const store = mockStore();
    return store.dispatch(actionCreators.requestImage('coffee'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
