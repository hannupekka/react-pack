import styles from 'styles/containers/Index.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import CSSModules from 'react-css-modules';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import * as uiActions from 'redux/modules/ui';
import * as userActions from 'redux/modules/user';
import getUsers from 'redux/modules/user/selectors';
import getShowGreeting from 'redux/modules/ui/selectors';

export class Index extends Component {
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

  onFetchRandomUsers = () => {
    const { dispatch } = this.props;
    dispatch(userActions.fetchRandomUsers());
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

Index.propTypes = {
  showGreeting: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapState = createStructuredSelector({
  showGreeting: getShowGreeting,
  users: getUsers,
});

export default hot(module)(connect(mapState)(CSSModules(Index, styles)));
