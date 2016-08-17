import styles from 'styles/containers/Index.less';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import * as actionCreators from 'actions/actionCreators';

class Index extends Component {
  constructor(props) {
    super(props);
    this.onToggleGreeting = this.onToggleGreeting.bind(this);
  }

  onToggleGreeting() {
    this.props.actions.toggleGreeting();
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
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  showGreeting: PropTypes.bool.isRequired
};

const select = store => ({
  showGreeting: store.ui.get('showGreeting')
});

const mapActions = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  select,
  mapActions
)(CSSModules(Index, styles));
