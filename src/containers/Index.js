// @flow
import styles from 'styles/containers/Index.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { push } from 'react-router-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CSSModules from 'react-css-modules';
import * as uiActions from 'redux/modules/ui';

type Props = {
  showGreeting: boolean,
  dispatch: Function
};

class Index extends Component {
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
        <button styleName="button" onClick={this.onToggleGreeting}>Toggle greeting</button>
        <ReactCSSTransitionGroup
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
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

type Store = {
  +ui: Map<string, any>
};

const mapState: Object = (store: Store) => ({
  showGreeting: store.ui.get('showGreeting')
});

export default connect(
  mapState
)(CSSModules(Index, styles));
