const CONFIG = require('../src/constants/config');
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
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

// describe('Image actions', () => {
//   afterEach(() => {
//     nock.cleanAll()
//   })
//
//   it('should create an action to fetch random image', () => {
//     var scope = nock(CONFIG.API_HOST)
//       .filteringPath(path => '/')
//       .get('/')
//       .reply(200, {
//         payload: {}
//       });
//
//     console.log(scope);
//
//     const expectedActions = [
//       { type: ImageActions.REQUEST_IMAGE, payload: 'coffee' },
//       { type: ImageActions.RECEIVE_IMAGE, payload: 'lol' }
//     ];
//
//     const store = mockStore({ image: {} });
//     return store.dispatch(ImageActions.requestImage('coffee'))
//       .then(() => {
//         expect(store.getActions()).toEqual(expectedActions)
//       });
//   });
// });
