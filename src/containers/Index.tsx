import styles from '@app/styles/containers/Index.less';
import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import map from 'lodash-es/map';
import { createStructuredSelector } from 'reselect';
import * as uiActions from '@app/redux/ui';
import * as userActions from '@app/redux/users';
import { TDispatch, IUser } from '@app/types';
import getUsers from '@app/redux/users/selectors';
import getShowGreeting from '@app/redux/ui/selectors';

interface Props {
  dispatch: TDispatch;
  showGreeting: boolean;
  users: Array<IUser>;
}

export class Index extends React.Component<Props> {
  onNavigateToRepoSearch = () => {
    const { dispatch } = this.props;
    dispatch(push('/repos'));
  };

  onToggleGreeting = () => {
    const { dispatch } = this.props;
    dispatch(uiActions.toggleGreeting());
  };

  renderGreeting = () => {
    const { showGreeting } = this.props;

    if (!showGreeting) {
      return null;
    }

    return <h1>Hello world!</h1>;
  };

  renderUsers = () => {
    const { users } = this.props;

    if (Object.keys(users).length === 0) {
      return null;
    }

    return (
      <div>
        {map(users, (user: IUser, i: number) => (
          <p key={user.email}>
            User {i + 1}: {user.email}
          </p>
        ))}
      </div>
    );
  };

  onFetchRandomUsers = () => {
    const { dispatch } = this.props;
    dispatch(userActions.fetchRandomUser());
  };

  render(): JSX.Element {
    return (
      <div>
        <button className={styles.button} onClick={this.onNavigateToRepoSearch}>
          Navigate to other page
        </button>
        <button className={styles.button} onClick={this.onToggleGreeting}>
          Toggle greeting
        </button>
        <button className={styles.button} onClick={this.onFetchRandomUsers}>
          Fetch 2 random users
        </button>
        {this.renderGreeting()}
        {this.renderUsers()}
      </div>
    );
  }
}

const mapState = createStructuredSelector({
  showGreeting: getShowGreeting,
  users: getUsers,
});

export default connect(mapState)(Index);
