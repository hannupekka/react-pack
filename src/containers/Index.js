// @flow
import styles from 'styles/containers/Index.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import CSSModules from 'react-css-modules';
import * as uiActions from 'redux/modules/ui';

type Props = {
  showGreeting: boolean,
  dispatch: Function
};

export class Index extends Component {
  props: Props;

  onNavigateToRepoSearch = () => {
    const { dispatch } = this.props;
    dispatch(push('/repos'));
  }

  onToggleGreeting = (): void => {
    const { dispatch } = this.props;
    dispatch(uiActions.toggleGreeting());
  }

  renderGreeting = (): ?React$Element<any> => {
    const { showGreeting } = this.props;

    if (!showGreeting) {
      return null;
    }

    return <h1>Hello world!</h1>;
  }

  render() {
    return (
      <div>
        <button
          styleName="button"
          onClick={this.onNavigateToRepoSearch}
        >Navigate to other page
        </button>
        <button
          styleName="button"
          onClick={this.onToggleGreeting}
        >Toggle greeting
        </button>
        <CSSTransitionGroup
          transitionEnterTimeout={150}
          transitionLeaveTimeout={150}
          transitionName={{
            enter: styles.enter,
            enterActive: styles['enter--active'],
            leave: styles.leave,
            leaveActive: styles['leave--active'],
          }}
        >
          {this.renderGreeting()}
        </CSSTransitionGroup>
      </div>
    );
  }
}

type MappedState = {
  showGreeting: boolean
}

const mapState: Function = (state: State): MappedState => ({
  showGreeting: state.ui.get('showGreeting')
});

export default connect(
  mapState
)(CSSModules(Index, styles));
