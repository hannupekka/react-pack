// @flow
import styles from 'styles/containers/RepoSearch.less';
import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { pure } from 'recompose';
import * as reposActions from 'redux/modules/repos';
import getVisibleRepos from 'redux/selectors/repos';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Repo from 'components/Repo';

type Props = {
  repos: ImmutablePropTypes.map.isRequired,
  users: ImmutablePropTypes.map.isRequired,
  isError: boolean,
  isLoading: boolean,
  showForks: boolean,
  dispatch: Function
};

export class RepoSearch extends Component {
  props: Props;

  bindUsername: Function;
  username: HTMLInputElement;

  constructor(props: Object) {
    super(props);

    this.bindUsername = c => (this.username = c);
  }

  onFetchRepos = (): void => {
    const { dispatch } = this.props;
    const username: string = this.username.value;
    dispatch(reposActions.fetchRepos(username));
  }

  onToggleShowForks = (): void => {
    const { dispatch } = this.props;
    dispatch(reposActions.toggleShowForks());
  }

  maybeRenderFilter = (): ?React$Element<any> => {
    const { repos, showForks } = this.props;

    if (repos.size === 0) {
      return null;
    }

    const text = showForks ? 'Hide forks' : 'Include forks';

    return (
      <button styleName="button" onClick={this.onToggleShowForks}>
        {text} <i className="fa fa-filter"></i>
      </button>
    );
  }

  maybeRenderRepoList = (): ?React$Element<any> => {
    const { repos, users } = this.props;

    if (repos.size === 0) {
      return null;
    }

    return repos.map((repo) => {
      const id = repo.get('id');

      const params = {
        name: repo.get('name'),
        url: repo.get('html_url'),
        user: users.getIn([repo.get('owner').toString(), 'login'])
      };

      return <Repo key={id} {...params} />;
    }).toArray();
  }

  render(): React$Element<any> {
    const { isLoading, isError } = this.props;

    return (
      <div styleName="repo-search">
        { isError && <Error message="Repositories not found!" />}
        <label htmlFor="search">Username</label>
        <input
          type="text"
          styleName="input"
          defaultValue="hannupekka"
          ref={this.bindUsername}
        />
        <button styleName="button" onClick={this.onFetchRepos}>
          Get users repositories <i className="fa fa-search"></i>
        </button>
        {this.maybeRenderFilter()}
        {isLoading && <Loader />}
        <div styleName="repo-list">
          {this.maybeRenderRepoList()}
        </div>
      </div>
    );
  }
}

type Store = {
  +repos: Map<string, any>
};

const mapState: Object = (store: Store) => ({
  repos: getVisibleRepos(store),
  users: store.repos.getIn(['entities', 'users']),
  isError: store.repos.get('isError'),
  isLoading: store.repos.get('isLoading'),
  showForks: store.repos.get('showForks')
});

export default connect(
  mapState
)(pure(CSSModules(RepoSearch, styles)));
