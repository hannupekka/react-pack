import styles from 'styles/image.less';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import CSSModules from 'react-css-modules';
import * as ImageActions from 'actions/image';
import Loader from 'components/loader';
import Error from 'components/Error';

class Image extends Component {
  render() {
    const { isLoading, isError, image, actions } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <Error message="Error requesting image!" />;
    }

    return (
      <div styleName="image">
        <button onClick={() => actions.requestImage()}>Get random image</button>
        {image.get('image_url') && <img src={image.get('image_url')} />}
      </div>
    );
  }
}

Image.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  image: ImmutablePropTypes.map,
  params: PropTypes.object // Inserted by react-router-redux
};

const select = store => {
  return {
    isLoading: store.image.get('isLoading'),
    isError: store.image.get('isError'),
    image: store.image.get('image')
  };
};

const mapActions = dispatch => {
  return {
    actions: bindActionCreators(ImageActions, dispatch)
  };
};

export default connect(
  select,
  mapActions
)(CSSModules(Image, styles));
