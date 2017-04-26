import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { Map } from 'immutable';
import configureStore from 'store/configureStore';
import { fetchReposSuccess, toggleShowForks } from 'redux/modules/repos';
import ConnectedReposSearch, { RepoSearch } from 'containers/RepoSearch';
import { repos, users } from '../data';

describe('RepoSearch', () => {
  it('renders correctly with empty data', () => {
    const tree = renderer.create(
      <RepoSearch
        repos={Map()}
        users={Map()}
        isError={false}
        isLoading={false}
        dispatch={() => {}}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with error', () => {
    const tree = renderer.create(
      <RepoSearch
        repos={Map()}
        users={Map()}
        isError
        isLoading={false}
        dispatch={() => {}}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with loader', () => {
    const tree = renderer.create(
      <RepoSearch
        repos={Map()}
        users={Map()}
        isError={false}
        isLoading
        dispatch={() => {}}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with all repos', () => {
    const tree = renderer.create(
      <RepoSearch
        repos={repos}
        users={users}
        isError={false}
        isLoading={false}
        showForks
        dispatch={() => {}}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with forks hidden', () => {
    // Get store.
    const store = configureStore();

    // Mock our repository fetch success data.
    const payload = {
      entities: {
        repos,
        users
      },
      result: repos.map(repo => repo.get('id')).toArray()
    };

    // Dispatch fetch success.
    store.dispatch(fetchReposSuccess(payload));

    // Hide forks.
    store.dispatch(toggleShowForks());

    const tree = renderer.create(
      <Provider store={store}>
        <ConnectedReposSearch />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
