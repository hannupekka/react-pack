import styles from 'styles/containers/ImageSearch.less';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import CSSModules from 'react-css-modules';
import { onlyUpdateForKeys } from 'recompose';
import * as ImageActions from 'actions/image';
import Loader from 'components/loader';
import Error from 'components/Error';
import Image from 'components/Image';

class ImageSearch extends Component {
  render() {
    const { isLoading, isError, image } = this.props;

    if (isError) {
      return <Error message="Error requesting image!" />;
    }

    return (
      <div styleName="image-search">
        <label htmlFor="search">Search word</label>
        <input type="text" ref="search" />
        <button onClick={this._requestImage}>Get random image</button>
        {isLoading && <Loader />}
        <Image src={image.get('fixed_height_downsampled_url')} />
      </div>
    );
  }

  constructor(props) {
    super(props);

    this._requestImage = () => props.actions.requestImage(this.refs.search.value);
  }
}

ImageSearch.propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object,
  image: ImmutablePropTypes.map,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const select = store => ({
  image: store.image.get('image'),
  isError: store.image.get('isError'),
  isLoading: store.image.get('isLoading')
});

const mapActions = dispatch => ({
  actions: bindActionCreators(ImageActions, dispatch)
});

export default connect(
  select,
  mapActions
)(onlyUpdateForKeys(['isLoading', 'isError', 'image'])(CSSModules(ImageSearch, styles)));
