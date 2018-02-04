/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import map from 'lodash-es/map';
import configureStore from '@app/store/configureStore';
import { fetchReposSuccess, toggleShowForks } from '@app/redux/repos';
import ConnectedReposSearch, { RepoSearch } from '@app/containers/RepoSearch';
import { repos, users } from '../data';

describe('RepoSearch', () => {
  it('renders correctly with empty data', () => {
    const tree = renderer
      .create(
        <RepoSearch
          repos={{}}
          users={{}}
          isError={false}
          isLoading={false}
          showForks={false}
          dispatch={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with error', () => {
    const tree = renderer
      .create(
        <RepoSearch
          repos={{}}
          users={{}}
          isError
          isLoading={false}
          showForks={false}
          dispatch={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with loader', () => {
    const tree = renderer
      .create(
        <RepoSearch
          repos={{}}
          users={{}}
          isError={false}
          isLoading
          showForks={false}
          dispatch={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with all repos', () => {
    const tree = renderer
      .create(
        <RepoSearch
          repos={repos}
          users={users}
          isError={false}
          isLoading={false}
          showForks
          dispatch={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with forks hidden', () => {
    // Get store.
    const store = configureStore();

    // Mock our repository fetch success data.
    const payload = {
      entities: {
        repos,
        users,
      },
      result: map(repos, repo => repo.id),
    };

    // Dispatch fetch success.
    store.dispatch(fetchReposSuccess(payload));

    // Hide forks.
    store.dispatch(toggleShowForks());

    const tree = renderer
      .create(
        <Provider store={store}>
          <ConnectedReposSearch />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
