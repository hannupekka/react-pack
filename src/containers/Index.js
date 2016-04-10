import 'styles/index.less';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ImmutablePropTypes from 'react-immutable-proptypes';
import * as UiActions from 'actions/ui';
import Loader from 'components/loader';
import Error from 'components/error';

class Index extends Component {
  render() {
    return (
      <div>This be index</div>
    );
  }
}

Index.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  showGreeting: ImmutablePropTypes.bool.isError,
  params: PropTypes.object // Inserted by react-router-redux
};

const select = store => {
  return {
    isLoading: store.article.getIn(['article', 'isLoading']),
    isError: store.article.getIn(['article', 'isError']),
    article: store.article.getIn(['article', 'article'])
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
)(Index);
