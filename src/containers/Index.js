import styles from 'styles/index.less';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import * as UiActions from 'actions/ui';

class Index extends Component {
  render() {
    const { showGreeting, actions } = this.props;
    return (
      <div>
        <button onClick={() => actions.toggleGreeting(!showGreeting)}>Toggle greeting</button>
        {showGreeting && <h1>Hello world!</h1>}
      </div>
    );
  }
}

Index.propTypes = {
  actions: PropTypes.object.isRequired,
  showGreeting: PropTypes.bool.isRequired,
  params: PropTypes.object
};

const select = store => {
  return {
    showGreeting: store.ui.get('showGreeting')
  };
};

const mapActions = dispatch => {
  return {
    actions: bindActionCreators(UiActions, dispatch)
  };
};

export default connect(
  select,
  mapActions
)(CSSModules(Index, styles));
