/* eslint-env jest */
import reducer, * as Users from 'redux/users';

describe('actions', () => {
  it('should create an action for fetching random user', () => {
    const expected = {
      type: Users.FETCH_RANDOM_USER,
      payload: {},
    };

    expect(Users.fetchRandomUser()).toEqual(expected);
  });

  it('should create an action for fetching random user succesfully', () => {
    const user = {
      mail: 'foo.bar@example.com',
    };

    const expected = {
      type: Users.FETCH_RANDOM_USER_SUCCESS,
      payload: user,
    };

    expect(Users.fetchRandomUserSuccess(user)).toEqual(expected);
  });

  it('should create an action for fetching second random user', () => {
    const user = {
      mail: 'foo.bar@example.com',
    };

    const expected = {
      type: Users.FETCH_SECOND_RANDOM_USER,
      payload: user,
    };

    expect(Users.fetchSecondRandomUser(user)).toEqual(expected);
  });

  it('should create an action for fetching second random user succesfully', () => {
    const users = [{ mail: 'foo.bar@example.com' }, { mail: 'bar.foo@example.com' }];

    const expected = {
      type: Users.FETCH_SECOND_RANDOM_USER_SUCCESS,
      payload: {
        users,
      },
    };

    expect(Users.fetchSecondRandomUserSuccess(users)).toEqual(expected);
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(Users.initialState);
  });

  it('should handle FETCH_RANDOM_USER', () => {
    const action = {
      type: Users.FETCH_RANDOM_USER,
      payload: {},
    };

    const expected = {
      isLoading: true,
      isError: false,
      users: [],
    };

    expect(reducer(Users.initialState, action)).toEqual(expected);
  });

  it('should handle FETCH_SECOND_RANDOM_USER_SUCCESS', () => {
    const users = [{ mail: 'foo.bar@example.com' }, { mail: 'bar.foo@example.com' }];

    const action = {
      type: Users.FETCH_SECOND_RANDOM_USER_SUCCESS,
      payload: {
        users,
      },
    };

    const expected = {
      isLoading: false,
      isError: false,
      users,
    };

    expect(reducer(Users.initialState, action)).toEqual(expected);
  });

  it('should handle FETCH_RANDOM_USER_FAILURE', () => {
    const action = {
      type: Users.FETCH_RANDOM_USER_FAILURE,
      payload: {},
    };

    const expected = {
      isLoading: false,
      isError: true,
      users: [],
    };

    expect(reducer(Users.initialState, action)).toEqual(expected);
  });

  it('should handle FETCH_SECOND_RANDOM_USER_FAILURE', () => {
    const action = {
      type: Users.FETCH_SECOND_RANDOM_USER_FAILURE,
      payload: {},
    };

    const expected = {
      isLoading: false,
      isError: true,
      users: [],
    };

    expect(reducer(Users.initialState, action)).toEqual(expected);
  });
});
