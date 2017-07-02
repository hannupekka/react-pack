// @flow
import styles from 'styles/containers/RepoSearch.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { pure } from 'recompose';
import R from 'ramda';
import * as reposActions from 'redux/repos';
import getVisibleRepos from 'redux/repos/selectors';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Repo from 'components/Repo';

type Props = {
  repos: Object,
  users: Object,
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
  };

  onToggleShowForks = (): void => {
    const { dispatch } = this.props;
    dispatch(reposActions.toggleShowForks());
  };

  maybeRenderFilter = (): ?React$Element<any> => {
    const { repos, showForks } = this.props;

    if (Object.keys(repos).length === 0) {
      return null;
    }

    const text = showForks ? 'Hide forks' : 'Include forks';

    return (
      <button styleName="button" onClick={this.onToggleShowForks}>
        {text} <i className="fa fa-filter" />
      </button>
    );
  };

  maybeRenderRepoList = (): ?Array<React$Element<any>> => {
    const { repos, users } = this.props;

    if (Object.keys(repos).length === 0) {
      return null;
    }

    return R.compose(
      R.values,
      R.mapObjIndexed(repo => {
        const { id, name, html_url, owner } = repo;

        const params = {
          name,
          url: html_url,
          user: users[owner].login
        };

        return <Repo key={id} {...params} />;
      })
    )(repos);
  };

  render(): React$Element<any> {
    const { isLoading, isError } = this.props;

    return (
      <div styleName="repo-search">
        {isError && <Error message="Repositories not found!" />}
        <label htmlFor="search">Username</label>
        <input type="text" styleName="input" defaultValue="hannupekka" ref={this.bindUsername} />
        <button styleName="button" onClick={this.onFetchRepos}>
          Get users repositories <i className="fa fa-search" />
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

type MappedState = {
  repos: Object,
  users: Object,
  isError: boolean,
  isLoading: boolean,
  showForks: boolean
};

const mapState: Function = (state: RootState): MappedState => ({
  repos: getVisibleRepos(state),
  users: state.repos.entities.users,
  isError: state.repos.isError,
  isLoading: state.repos.isLoading,
  showForks: state.repos.showForks
});

export default connect(mapState)(pure(CSSModules(RepoSearch, styles)));
