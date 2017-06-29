import R from 'ramda';
import configureStore from 'store/configureStore';
import getVisibleRepos from 'redux/repos/selectors';
import { fetchReposSuccess, toggleShowForks } from 'redux/repos';
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
      result: R.mapObjIndexed(repo => repo.id, repos)
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
      result: R.mapObjIndexed(repo => repo.id, repos)
    };

    // Dispatch fetch success and then hide forks.
    store.dispatch(fetchReposSuccess(payload));
    store.dispatch(toggleShowForks());

    // Get expected state.
    const expected = getVisibleRepos(store.getState());
    expect(expected).toMatchSnapshot();
  });
});
