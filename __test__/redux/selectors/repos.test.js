import { map } from 'lodash';
import configureStore from 'store/configureStore';
import getVisibleRepos from 'redux/selectors/repos';
import { fetchReposSuccess, toggleShowForks } from 'redux/modules/repos';
import { repos, users } from '../../data';

describe('Selector', () => {
  it('should return all repos', () => {
    // Get store.
    const store = configureStore();

    // Mock our repository fetch success data.
    const payload = {
      entities: {
        repos,
        users
      },
      result: map(repos, repo => repo.id)
    };

    // Dispatch fetch success.
    store.dispatch(fetchReposSuccess(payload));

    // Get expected state.
    const expected = getVisibleRepos(store.getState());
    expect(expected).toMatchSnapshot();
  });

  it('should not return forked repos', () => {
    // Get store.
    const store = configureStore();

    // Mock our repository fetch success data.
    const payload = {
      entities: {
        repos,
        users
      },
      result: map(repos, repo => repo.id)
    };

    // Dispatch fetch success and then hide forks.
    store.dispatch(fetchReposSuccess(payload));
    store.dispatch(toggleShowForks());

    // Get expected state.
    const expected = getVisibleRepos(store.getState());
    expect(expected).toMatchSnapshot();
  });
});
