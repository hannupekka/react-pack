import styles from 'styles/containers/Index';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import * as uiActions from 'redux/modules/ui';

class Index extends Component {
  constructor(props) {
    super(props);
    this.onToggleGreeting = this.onToggleGreeting.bind(this);
  }

  onToggleGreeting() {
    this.props.toggleGreeting();
  }

  render() {
    const { showGreeting } = this.props;
    return (
      <div>
        <button onClick={this.onToggleGreeting}>Toggle greeting</button>
        {showGreeting && <h1>Hello world!</h1>}
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
