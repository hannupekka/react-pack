// @flow
import styles from 'styles/containers/ImageSearch';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import CSSModules from 'react-css-modules';
import { onlyUpdateForKeys } from 'recompose';
import * as imageActions from 'redux/modules/image';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Image from 'components/Image';

type Props = {
  fetchImage: (search: string) => void,
  image: Map<string, Object>,
  isError: bool,
  isLoading: bool,
  params: Object
}

class ImageSearch extends Component {
  props: Props;

  bindSearch: Function;
  search: HTMLInputElement;

  constructor(props) {
    super(props);

    this.bindSearch = (c) => (this.search = c);
  }

  onFetchImage = (): void => {
    const search = this.search.value;
    this.props.fetchImage(search);
  }

  render(): ElementType {
    const { isLoading, isError, image } = this.props;

    if (isError) {
      return <Error message="Error requesting image!" />;
    }

    return (
      <div styleName="image-search">
        <label htmlFor="search">Search word</label>
        <input type="text" styleName="input" ref={this.bindSearch} />
        <button styleName="button" onClick={this.onFetchImage}>
          Get random image <i className="fa fa-search"></i>
        </button>
        {isLoading && <Loader />}
        <Image src={image.get('fixed_height_downsampled_url')} />
      </div>
    );
  }
}

const select = store => ({
  image: store.image.get('image'),
  isError: store.image.get('isError'),
  isLoading: store.image.get('isLoading')
});

const mapActions = dispatch => {
  return {
    fetchImage: (tag: string) => dispatch(imageActions.fetchImage(tag))
  };
};

export default connect(
  select,
  mapActions
)(onlyUpdateForKeys(['isLoading', 'isError', 'image'])(CSSModules(ImageSearch, styles)));
