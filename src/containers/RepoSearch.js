// @flow
import styles from 'styles/containers/RepoSearch.less';
import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { pure } from 'recompose';
import * as reposActions from 'redux/modules/repos';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Repo from 'components/Repo';

type Props = {
  repos: ImmutablePropTypes.list.isRequired,
  isError: boolean,
  isLoading: boolean,
  dispatch: Function
};

class RepoSearch extends Component {
  props: Props;

  bindUsername: Function;
  username: HTMLInputElement;

  constructor(props) {
    super(props);

    this.bindUsername = c => (this.username = c);
  }

  onFetchRepos = (): void => {
    const { dispatch } = this.props;
    const username: string = this.username.value;
    dispatch(reposActions.fetchRepos(username));
  }

  renderRepoList = (): ?React$Element<any> => {
    const { repos } = this.props;

    if (repos.size === 0) {
      return null;
    }

    return repos.map((repo) => {
      const id = repo.get('id');

      const params = {
        name: repo.get('name'),
        url: repo.get('html_url')
      };

      return <Repo key={id} {...params} />;
    });
  }

  render(): React$Element<any> {
    const { isLoading, isError } = this.props;

    return (
      <div styleName="repo-search">
        { isError && <Error message="Repositories not found!" />}
        <label htmlFor="search">Username</label>
        <input type="text" styleName="input" ref={this.bindUsername} />
        <button styleName="button" onClick={this.onFetchRepos}>
          Get users repositories <i className="fa fa-search"></i>
        </button>
        {isLoading && <Loader />}
        <div styleName="repo-list">
          {this.renderRepoList()}
        </div>
      </div>
    );
  }
}

type Store = {
  +repos: Map<string, any>
};

const mapState: Object = (store: Store) => ({
  repos: store.repos.get('repos'),
  isError: store.repos.get('isError'),
  isLoading: store.repos.get('isLoading')
});

export default connect(
  mapState
)(pure(CSSModules(RepoSearch, styles)));
