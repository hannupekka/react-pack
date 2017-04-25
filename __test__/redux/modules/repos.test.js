import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import nock from 'nock';
import { API_HOST } from 'constants/config';
import reducer, * as Repos from 'redux/modules/repos';

const epicMiddleware = createEpicMiddleware(Repos.fetchReposEpic);
const middlewares = [thunkMiddleware, epicMiddleware];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create an action for fetching repositories', () => {

    nock(API_HOST)
      .get('/users/hannupekka/repos')
      .reply(200, { repos: [] });

    const expected = [
      {
        type: Repos.FETCH_REPOS,
        payload: {
          username: 'hannupekka'
        }
      }
    ];

    const store = mockStore();
    store.dispatch(Repos.fetchRepos('hannupekka'));
    expect(store.getActions()).toEqual(expected);
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(Repos.initialState);
  });

  it('should handle FETCH_REPOS', () => {
    const action = {
      type: Repos.FETCH_REPOS,
      payload: {
        username: 'hannupekka'
      }
    };

    const expected = Repos.initialState.merge({
      isLoading: true,
      isError: false,
      repos: []
    });

    expect(
      reducer(Repos.initialState, action)
    ).toEqual(expected);
  });

  it('should handle FETCH_REPOS_SUCCESS', () => {
    const action = {
      type: Repos.FETCH_REPOS_SUCCESS,
      payload: [
        {
          id: 1,
          name: 'foobar'
        }
      ]
    };

    const expected = Repos.initialState.merge({
      isLoading: false,
      isError: false,
      repos: [
        {
          id: 1,
          name: 'foobar'
        }
      ]
    });

    expect(
      reducer(Repos.initialState, action)
    ).toEqual(expected);
  });

  it('should handle FETCH_REPOS_FAILURE', () => {
    const action = {
      type: Repos.FETCH_REPOS_FAILURE,
      payload: {}
    };

    const expected = Repos.initialState.merge({
      isLoading: false,
      isError: true
    });

    expect(
      reducer(Repos.initialState, action)
    ).toEqual(expected);
  });
});
