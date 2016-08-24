import styles from 'styles/containers/ImageSearch';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import CSSModules from 'react-css-modules';
import { onlyUpdateForKeys } from 'recompose';
import * as actionCreators from 'actions/actionCreators';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Image from 'components/Image';

class ImageSearch extends Component {
  constructor(props) {
    super(props);

    this.bindSearch = (c) => (this.search = c);
    this.onRequestImage = this.onRequestImage.bind(this);
  }

  onRequestImage() {
    const search = this.search.value;
    this.props.actions.requestImage(search);
  }

  render() {
    const { isLoading, isError, image } = this.props;

    if (isError) {
      return <Error message="Error requesting image!" />;
    }

    return (
      <div styleName="image-search">
        <label htmlFor="search">Search word</label>
        <input type="text" ref={this.bindSearch} />
        <button onClick={this.onRequestImage}>
          Get random image <i className="fa fa-search"></i>
        </button>
        {isLoading && <Loader />}
        <Image src={image.get('fixed_height_downsampled_url')} />
      </div>
    );
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
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  select,
  mapActions
)(onlyUpdateForKeys(['isLoading', 'isError', 'image'])(CSSModules(ImageSearch, styles)));
