/* eslint-env jest */
import configureStore from '@app/store/configureStore';
import map from 'lodash-es/map';
import { getVisibleRepos } from '@app/redux/repos/selectors';
import { fetchReposSuccess, toggleShowForks } from '@app/redux/repos';
import { repos, users } from '../../data';

describe('Selector', () => {
  // Get store.
  const store = configureStore();

  it('should return all repos', () => {
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

    // Get expected state.
    const expected = getVisibleRepos(store.getState());
    expect(expected).toMatchSnapshot();
  });

  it('should not return forked repos', () => {
    // Mock our repository fetch success data.
    const payload = {
      entities: {
        repos,
        users,
      },
      result: map(repos, repo => repo.id),
    };

    // Dispatch fetch success and then hide forks.
    store.dispatch(fetchReposSuccess(payload));
    store.dispatch(toggleShowForks());

    // Get expected state.
    const expected = getVisibleRepos(store.getState());
    expect(expected).toMatchSnapshot();
  });
});
