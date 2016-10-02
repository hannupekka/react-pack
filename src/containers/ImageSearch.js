// @flow

import styles from 'styles/containers/ImageSearch';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import CSSModules from 'react-css-modules';
import { onlyUpdateForKeys } from 'recompose';
import * as imageActions from 'redux/modules/image';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Image from 'components/Image';

class ImageSearch extends Component {
  constructor(props) {
    super(props);

    (this:any).bindSearch = (c) => ((this:any).search = c);
  }

  onFetchImage = () => {
    const search = (this:any).search.value;
    this.props.fetchImage(search);
  }

  render() {
    const { isLoading, isError, image } = this.props;

    if (isError) {
      return <Error message="Error requesting image!" />;
    }

    return (
      <div styleName="image-search">
        <label htmlFor="search">Search word</label>
        <input type="text" ref={(this:any).bindSearch} />
        <button onClick={this.onFetchImage}>
          Get random image <i className="fa fa-search"></i>
        </button>
        {isLoading && <Loader />}
        <Image src={image.get('fixed_height_downsampled_url')} />
      </div>
    );
  }
}

ImageSearch.propTypes = {
  fetchImage: PropTypes.func.isRequired,
  params: PropTypes.object,
  image: ImmutablePropTypes.map.isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const select = store => ({
  image: store.image.get('image'),
  isError: store.image.get('isError'),
  isLoading: store.image.get('isLoading')
});

const mapActions = dispatch => {
  return {
    fetchImage: tag => dispatch(imageActions.fetchImage(tag))
  };
};

export default connect(
  select,
  mapActions
)(onlyUpdateForKeys(['isLoading', 'isError', 'image'])(CSSModules(ImageSearch, styles)));
