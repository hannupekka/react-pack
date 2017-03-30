// @flow
import styles from 'styles/containers/ImageSearch.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { onlyUpdateForKeys } from 'recompose';
import * as imageActions from 'redux/modules/image';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Image from 'components/Image';

type Props = {
  image: Object,
  isError: bool,
  isLoading: bool,
  dispatch: Function,
}

class ImageSearch extends Component {
  props: Props;

  bindSearch: Function;
  search: HTMLInputElement;

  constructor(props) {
    super(props);

    this.bindSearch = c => (this.search = c);
  }

  onFetchImage = (): void => {
    const { dispatch } = this.props;
    const search = this.search.value;
    dispatch(imageActions.fetchImage(search));
  }

  render(): ElementType {
    const { isLoading, isError, image } = this.props;
    const src: string = image.get('fixed_height_downsampled_url');

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
        <Image src={src} />
      </div>
    );
  }
}

const mapState = store => ({
  image: store.image.get('image'),
  isError: store.image.get('isError'),
  isLoading: store.image.get('isLoading')
});

export default connect(
  mapState
)(onlyUpdateForKeys(['isLoading', 'isError', 'image'])(CSSModules(ImageSearch, styles)));
