import styles from 'styles/containers/RepoSearch.less';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import map from 'lodash/map';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import * as reposActions from 'redux/modules/repo';
import {
  getVisibleRepos,
  getUsers,
  getIsError,
  getIsLoading,
  getShowForks,
} from 'redux/modules/repo/selectors';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Repo from 'components/Repo';

export class RepoSearch extends PureComponent {
  constructor(props) {
    super(props);

    this.bindUsername = c => {
      this.username = c;
    };
  }

  onFetchRepos = () => {
    const { dispatch } = this.props;
    const username = this.username.value;
    dispatch(reposActions.fetchRepos(username));
  };

  onToggleShowForks = () => {
    const { dispatch } = this.props;
    dispatch(reposActions.toggleShowForks());
  };

  maybeRenderFilter = () => {
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

  maybeRenderRepoList = () => {
    const { repos, users } = this.props;

    if (Object.keys(repos).length === 0) {
      return null;
    }

    return map(repos, repo => {
      const { id, name, html_url: url, owner } = repo;

      const params = {
        name,
        url,
        user: users[owner].login,
      };

      return <Repo key={id} {...params} />;
    });
  };

  render() {
    const { isLoading, isError } = this.props;

    return (
      <div styleName="repo-search">
        {isError && <Error message="Repositories not found!" />}
        <label htmlFor="search">
          Username
          <input type="text" styleName="input" defaultValue="hannupekka" ref={this.bindUsername} />
        </label>
        <button styleName="button" onClick={this.onFetchRepos}>
          Get users repositories <i className="fa fa-search" />
        </button>
        {this.maybeRenderFilter()}
        {isLoading && <Loader />}
        <div styleName="repo-list">{this.maybeRenderRepoList()}</div>
      </div>
    );
  }
}

RepoSearch.propTypes = {
  repos: PropTypes.shape().isRequired,
  users: PropTypes.shape().isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  showForks: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapState = createStructuredSelector({
  repos: getVisibleRepos,
  users: getUsers,
  isError: getIsError,
  isLoading: getIsLoading,
  showForks: getShowForks,
});

export default hot(module)(connect(mapState)(CSSModules(RepoSearch, styles)));
