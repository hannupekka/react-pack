import styles from '@app/styles/containers/RepoSearch.less';
import * as React from 'react';
import { connect } from 'react-redux';
import map from 'lodash-es/map';
import { pure } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { TDispatch, IRepo, IUser } from '@app/types';
import * as reposActions from '@app/redux/repos';
import {
  getVisibleRepos,
  getUsers,
  getIsError,
  getIsLoading,
  getShowForks,
} from '@app/redux/repos/selectors';
import Loader from '@app/components/Loader';
import Error from '@app/components/Error';
import Repo from '@app/components/Repo';

interface Props {
  dispatch: TDispatch;
  repos: {
    [id: string]: IRepo;
  };
  users: {
    [id: string]: IUser;
  };
  showForks: boolean;
  isLoading: boolean;
  isError: boolean;
}

export class RepoSearch extends React.Component<Props> {
  bindUsername: (c: HTMLInputElement) => void;
  username: HTMLInputElement;

  constructor(props: Props) {
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
      <button className={styles.button} onClick={this.onToggleShowForks}>
        {text} <i className="fa fa-filter" />
      </button>
    );
  };

  maybeRenderRepoList = () => {
    const { repos, users } = this.props;

    if (Object.keys(repos).length === 0) {
      return null;
    }

    return map(repos, (repo: IRepo) => {
      const { id, name, html_url: url, owner } = repo;

      const params = {
        name,
        url,
        user: users[owner].login,
      };

      return <Repo key={id} {...params} />;
    });
  };

  render(): JSX.Element {
    const { isLoading, isError } = this.props;

    return (
      <div className={styles.search}>
        {isError && <Error message="Repositories not found!" />}
        <label htmlFor="search">Username</label>
        <input
          type="text"
          className={styles.input}
          defaultValue="hannupekka"
          ref={this.bindUsername}
        />
        <button className={styles.button} onClick={this.onFetchRepos}>
          Get users repositories <i className="fa fa-search" />
        </button>
        {this.maybeRenderFilter()}
        {isLoading && <Loader />}
        <div className={styles.list}>{this.maybeRenderRepoList()}</div>
      </div>
    );
  }
}

const mapState = createStructuredSelector({
  repos: getVisibleRepos,
  users: getUsers,
  isError: getIsError,
  isLoading: getIsLoading,
  showForks: getShowForks,
});

export default connect(mapState)(pure(RepoSearch));
