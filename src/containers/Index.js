// @flow
import styles from 'styles/containers/Index.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CSSModules from 'react-css-modules';
import * as uiActions from 'redux/modules/ui';

type Props = {
  showGreeting: bool,
  toggleGreeting: () => ActionType
};

class Index extends Component {
  props: Props;
  onToggleGreeting = (): void => {
    this.props.toggleGreeting();
  }

  renderGreeting = (): ?ElementType => {
    const { showGreeting } = this.props;

    if (!showGreeting) {
      return null;
    }

    return <h1>Hello world!</h1>;
  }

  render() {
    return (
      <div>
        <button onClick={this.onToggleGreeting}>Toggle greeting</button>
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

const mapState = store => ({
  showGreeting: store.ui.get('showGreeting')
});

const mapActions = {
  toggleGreeting: uiActions.toggleGreeting
};

export default connect(
  mapState,
  mapActions
)(CSSModules(Index, styles));
