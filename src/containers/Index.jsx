// @flow
import styles from 'styles/containers/Index.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import CSSModules from 'react-css-modules';
import * as uiActions from 'redux/ui';
import * as userActions from 'redux/users';

type Props = {
  showGreeting: boolean,
  users: Array<Object>,
  dispatch: Function,
};

export class Index extends Component<Props> {
  onNavigateToRepoSearch = (): void => {
    const { dispatch } = this.props;
    dispatch(push('/repos'));
  };

  onToggleGreeting = (): void => {
    const { dispatch } = this.props;
    dispatch(uiActions.toggleGreeting());
  };

  renderGreeting = (): ?React$Element<any> => {
    const { showGreeting } = this.props;

    if (!showGreeting) {
      return null;
    }

    return <h1>Hello world!</h1>;
  };

  renderUsers = (): ?React$Element<any> => {
    const { users } = this.props;

    if (users.length === 0) {
      return null;
    }

    return (
      <div>
        {users.map((user, i) => (
          <p key={user.email}>
            User {i + 1}: {user.email}
          </p>
        ))}
      </div>
    );
  };

  onFetchRandomUsers = (): void => {
    const { dispatch } = this.props;
    dispatch(userActions.fetchRandomUser());
  };

  render() {
    return (
      <div>
        <button styleName="button" onClick={this.onNavigateToRepoSearch}>
          Navigate to other page
        </button>
        <button styleName="button" onClick={this.onToggleGreeting}>
          Toggle greeting
        </button>
        <button styleName="button" onClick={this.onFetchRandomUsers}>
          Fetch 2 random users
        </button>
        {this.renderGreeting()}
        {this.renderUsers()}
      </div>
    );
  }
}

type MappedState = {
  showGreeting: boolean,
  users: Array<Object>,
};

const mapState: Function = (state: RootState): MappedState => ({
  showGreeting: state.ui.showGreeting,
  users: state.users.users,
});

export default connect(mapState)(CSSModules(Index, styles));
