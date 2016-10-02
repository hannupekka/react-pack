// @flow

import styles from 'styles/containers/Index';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CSSModules from 'react-css-modules';
import * as uiActions from 'redux/modules/ui';

class Index extends Component {
  onToggleGreeting = () => {
    this.props.toggleGreeting();
  }

  renderGreeting = () => {
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

Index.propTypes = {
  toggleGreeting: PropTypes.func.isRequired,
  params: PropTypes.object,
  showGreeting: PropTypes.bool.isRequired
};

const select = store => ({
  showGreeting: store.ui.get('showGreeting')
});

const mapActions = dispatch => {
  return {
    toggleGreeting: () => dispatch(uiActions.toggleGreeting())
  };
};

export default connect(
  select,
  mapActions
)(CSSModules(Index, styles));
