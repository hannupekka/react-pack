import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import nock from 'nock';
import { normalize } from 'normalizr';
import { API_HOST } from 'constants/config';
import reducer, * as Repos from 'redux/repos';
import { repos } from 'redux/repos/schemas';

const epicMiddleware = createEpicMiddleware(Repos.fetchReposEpic);
const middlewares = [thunkMiddleware, epicMiddleware];
const mockStore = configureMockStore(middlewares);

const TEST_REPOS = [
  {
    id: 78777673,
    name: 'badgenator',
    full_name: 'hannupekka/badgenator',
    owner: {
      login: 'hannupekka',
      id: 4472477,
      avatar_url: 'https://avatars3.githubusercontent.com/u/4472477?v=3',
      gravatar_id: '',
      url: 'https://api.github.com/users/hannupekka',
      html_url: 'https://github.com/hannupekka',
      followers_url: 'https://api.github.com/users/hannupekka/followers',
      following_url: 'https://api.github.com/users/hannupekka/following{/other_user}',
      gists_url: 'https://api.github.com/users/hannupekka/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/hannupekka/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/hannupekka/subscriptions',
      organizations_url: 'https://api.github.com/users/hannupekka/orgs',
      repos_url: 'https://api.github.com/users/hannupekka/repos',
      events_url: 'https://api.github.com/users/hannupekka/events{/privacy}',
      received_events_url: 'https://api.github.com/users/hannupekka/received_events',
      type: 'User',
      site_admin: false
    },
    private: false,
    html_url: 'https://github.com/hannupekka/badgenator',
    description: 'Generate name badges from your data',
    fork: false,
    url: 'https://api.github.com/repos/hannupekka/badgenator',
    forks_url: 'https://api.github.com/repos/hannupekka/badgenator/forks',
    keys_url: 'https://api.github.com/repos/hannupekka/badgenator/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/hannupekka/badgenator/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/hannupekka/badgenator/teams',
    hooks_url: 'https://api.github.com/repos/hannupekka/badgenator/hooks',
    issue_events_url: 'https://api.github.com/repos/hannupekka/badgenator/issues/events{/number}',
    events_url: 'https://api.github.com/repos/hannupekka/badgenator/events',
    assignees_url: 'https://api.github.com/repos/hannupekka/badgenator/assignees{/user}',
    branches_url: 'https://api.github.com/repos/hannupekka/badgenator/branches{/branch}',
    tags_url: 'https://api.github.com/repos/hannupekka/badgenator/tags',
    blobs_url: 'https://api.github.com/repos/hannupekka/badgenator/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/hannupekka/badgenator/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/hannupekka/badgenator/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/hannupekka/badgenator/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/hannupekka/badgenator/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/hannupekka/badgenator/languages',
    stargazers_url: 'https://api.github.com/repos/hannupekka/badgenator/stargazers',
    contributors_url: 'https://api.github.com/repos/hannupekka/badgenator/contributors',
    subscribers_url: 'https://api.github.com/repos/hannupekka/badgenator/subscribers',
    subscription_url: 'https://api.github.com/repos/hannupekka/badgenator/subscription',
    commits_url: 'https://api.github.com/repos/hannupekka/badgenator/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/hannupekka/badgenator/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/hannupekka/badgenator/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/hannupekka/badgenator/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/hannupekka/badgenator/contents/{+path}',
    compare_url: 'https://api.github.com/repos/hannupekka/badgenator/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/hannupekka/badgenator/merges',
    archive_url: 'https://api.github.com/repos/hannupekka/badgenator/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/hannupekka/badgenator/downloads',
    issues_url: 'https://api.github.com/repos/hannupekka/badgenator/issues{/number}',
    pulls_url: 'https://api.github.com/repos/hannupekka/badgenator/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/hannupekka/badgenator/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/hannupekka/badgenator/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/hannupekka/badgenator/labels{/name}',
    releases_url: 'https://api.github.com/repos/hannupekka/badgenator/releases{/id}',
    deployments_url: 'https://api.github.com/repos/hannupekka/badgenator/deployments',
    created_at: '2017-01-12T19:07:41Z',
    updated_at: '2017-01-20T07:53:00Z',
    pushed_at: '2017-03-23T06:04:57Z',
    git_url: 'git://github.com/hannupekka/badgenator.git',
    ssh_url: 'git@github.com:hannupekka/badgenator.git',
    clone_url: 'https://github.com/hannupekka/badgenator.git',
    svn_url: 'https://github.com/hannupekka/badgenator',
    homepage: 'https://badgenator-app.herokuapp.com/',
    size: 135,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    open_issues_count: 0,
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: 'master'
  }
];

const NORMALIZED_REPOS = normalize(TEST_REPOS, repos);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create an action for fetching repositories', () => {
    nock(API_HOST)
      .get('/users/hannupekka/repos')
      .reply(200, { repos: [] });

    const expected = [
      {
        type: Repos.FETCH_REPOS,
        payload: {
          username: 'hannupekka'
        }
      }
    ];

    const store = mockStore();
    store.dispatch(Repos.fetchRepos('hannupekka'));
    expect(store.getActions()).toEqual(expected);
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(Repos.initialState);
  });

  it('should handle FETCH_REPOS', () => {
    const action = {
      type: Repos.FETCH_REPOS,
      payload: {
        username: 'hannupekka'
      }
    };

    const expected = {
      ...Repos.initialState,
      isLoading: true,
      isError: false
    };

    expect(
      reducer(Repos.initialState, action)
    ).toEqual(expected);
  });

  it('should handle FETCH_REPOS_SUCCESS', () => {
    const action = {
      type: Repos.FETCH_REPOS_SUCCESS,
      payload: NORMALIZED_REPOS
    };

    const expected = {
      ...Repos.initialState,
      entities: NORMALIZED_REPOS.entities,
      result: NORMALIZED_REPOS.result
    };

    expect(
      reducer(Repos.initialState, action)
    ).toEqual(expected);
  });

  it('should handle FETCH_REPOS_FAILURE', () => {
    const action = {
      type: Repos.FETCH_REPOS_FAILURE,
      payload: {}
    };

    const expected = {
      ...Repos.initialState,
      isLoading: false,
      isError: true
    };

    expect(
      reducer(Repos.initialState, action)
    ).toEqual(expected);
  });
});
