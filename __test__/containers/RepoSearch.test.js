import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { fromJS, Map } from 'immutable';
import { RepoSearch } from 'containers/RepoSearch';

const REPOS = fromJS({
  "12482715": {
    "hooks_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/hooks",
    "default_branch": "master",
    "branches_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/branches{/branch}",
    "size": 144,
    "forks_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/forks",
    "forks_count": 0,
    "fork": false,
    "git_url": "git://github.com/hannupekka/fressi-gym-activity.git",
    "private": false,
    "keys_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/keys{/key_id}",
    "comments_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/comments{/number}",
    "trees_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/git/trees{/sha}",
    "has_downloads": true,
    "blobs_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/git/blobs{/sha}",
    "teams_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/teams",
    "watchers_count": 0,
    "stargazers_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/stargazers",
    "stargazers_count": 0,
    "contributors_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/contributors",
    "tags_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/tags",
    "issue_comment_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/issues/comments{/number}",
    "events_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/events",
    "created_at": "2013-08-30T09:17:39Z",
    "issues_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/issues{/number}",
    "contents_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/contents/{+path}",
    "merges_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/merges",
    "name": "fressi-gym-activity",
    "languages_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/languages",
    "commits_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/commits{/sha}",
    "subscription_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/subscription",
    "clone_url": "https://github.com/hannupekka/fressi-gym-activity.git",
    "homepage": null,
    "issue_events_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/issues/events{/number}",
    "mirror_url": null,
    "labels_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/labels{/name}",
    "url": "https://api.github.com/repos/hannupekka/fressi-gym-activity",
    "open_issues": 0,
    "statuses_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/statuses/{sha}",
    "forks": 0,
    "archive_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/{archive_format}{/ref}",
    "milestones_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/milestones{/number}",
    "owner": 4472477,
    "assignees_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/assignees{/user}",
    "has_wiki": true,
    "compare_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/compare/{base}...{head}",
    "git_tags_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/git/tags{/sha}",
    "updated_at": "2013-10-31T15:13:19Z",
    "watchers": 0,
    "notifications_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/notifications{?since,all,participating}",
    "ssh_url": "git@github.com:hannupekka/fressi-gym-activity.git",
    "language": "Python",
    "pushed_at": "2013-10-31T15:13:15Z",
    "downloads_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/downloads",
    "subscribers_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/subscribers",
    "id": 12482715,
    "svn_url": "https://github.com/hannupekka/fressi-gym-activity",
    "full_name": "hannupekka/fressi-gym-activity",
    "html_url": "https://github.com/hannupekka/fressi-gym-activity",
    "description": "Fetches, parses and formats gym activity for Fressi gyms",
    "releases_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/releases{/id}",
    "git_refs_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/git/refs{/sha}",
    "collaborators_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/collaborators{/collaborator}",
    "pulls_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/pulls{/number}",
    "deployments_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/deployments",
    "has_projects": true,
    "has_pages": false,
    "open_issues_count": 0,
    "git_commits_url": "https://api.github.com/repos/hannupekka/fressi-gym-activity/git/commits{/sha}",
    "has_issues": true
  },
  "13828937": {
    "hooks_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/hooks",
    "default_branch": "master",
    "branches_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/branches{/branch}",
    "size": 148,
    "forks_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/forks",
    "forks_count": 0,
    "fork": false,
    "git_url": "git://github.com/hannupekka/pyfibot-modules.git",
    "private": false,
    "keys_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/keys{/key_id}",
    "comments_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/comments{/number}",
    "trees_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/git/trees{/sha}",
    "has_downloads": true,
    "blobs_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/git/blobs{/sha}",
    "teams_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/teams",
    "watchers_count": 0,
    "stargazers_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/stargazers",
    "stargazers_count": 0,
    "contributors_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/contributors",
    "tags_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/tags",
    "issue_comment_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/issues/comments{/number}",
    "events_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/events",
    "created_at": "2013-10-24T10:15:26Z",
    "issues_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/issues{/number}",
    "contents_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/contents/{+path}",
    "merges_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/merges",
    "name": "pyfibot-modules",
    "languages_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/languages",
    "commits_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/commits{/sha}",
    "subscription_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/subscription",
    "clone_url": "https://github.com/hannupekka/pyfibot-modules.git",
    "homepage": "",
    "issue_events_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/issues/events{/number}",
    "mirror_url": null,
    "labels_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/labels{/name}",
    "url": "https://api.github.com/repos/hannupekka/pyfibot-modules",
    "open_issues": 0,
    "statuses_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/statuses/{sha}",
    "forks": 0,
    "archive_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/{archive_format}{/ref}",
    "milestones_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/milestones{/number}",
    "owner": 4472477,
    "assignees_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/assignees{/user}",
    "has_wiki": true,
    "compare_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/compare/{base}...{head}",
    "git_tags_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/git/tags{/sha}",
    "updated_at": "2014-01-08T09:21:00Z",
    "watchers": 0,
    "notifications_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/notifications{?since,all,participating}",
    "ssh_url": "git@github.com:hannupekka/pyfibot-modules.git",
    "language": "Python",
    "pushed_at": "2014-01-08T09:20:59Z",
    "downloads_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/downloads",
    "subscribers_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/subscribers",
    "id": 13828937,
    "svn_url": "https://github.com/hannupekka/pyfibot-modules",
    "full_name": "hannupekka/pyfibot-modules",
    "html_url": "https://github.com/hannupekka/pyfibot-modules",
    "description": "My collection of modules for Pyfibot the Python IRC bot",
    "releases_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/releases{/id}",
    "git_refs_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/git/refs{/sha}",
    "collaborators_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/collaborators{/collaborator}",
    "pulls_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/pulls{/number}",
    "deployments_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/deployments",
    "has_projects": true,
    "has_pages": false,
    "open_issues_count": 0,
    "git_commits_url": "https://api.github.com/repos/hannupekka/pyfibot-modules/git/commits{/sha}",
    "has_issues": true
  }
});

const USERS = fromJS({
  "4472477": {
    "gists_url": "https://api.github.com/users/hannupekka/gists{/gist_id}",
    "following_url": "https://api.github.com/users/hannupekka/following{/other_user}",
    "followers_url": "https://api.github.com/users/hannupekka/followers",
    "subscriptions_url": "https://api.github.com/users/hannupekka/subscriptions",
    "received_events_url": "https://api.github.com/users/hannupekka/received_events",
    "events_url": "https://api.github.com/users/hannupekka/events{/privacy}",
    "avatar_url": "https://avatars3.githubusercontent.com/u/4472477?v=3",
    "login": "hannupekka",
    "url": "https://api.github.com/users/hannupekka",
    "starred_url": "https://api.github.com/users/hannupekka/starred{/owner}{/repo}",
    "organizations_url": "https://api.github.com/users/hannupekka/orgs",
    "repos_url": "https://api.github.com/users/hannupekka/repos",
    "gravatar_id": "",
    "site_admin": false,
    "type": "User",
    "id": 4472477,
    "html_url": "https://github.com/hannupekka"
  }
});

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

  it('renders correctly with data', () => {
    const tree = renderer.create(
      <RepoSearch
        repos={REPOS}
        users={USERS}
        isError={false}
        isLoading={false}
        dispatch={() => {}}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
