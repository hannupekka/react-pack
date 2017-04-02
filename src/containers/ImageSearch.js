// @flow
import styles from 'styles/containers/ImageSearch.less';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { pure } from 'recompose';
import * as imageActions from 'redux/modules/image';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Image from 'components/Image';

type Props = {
  url: string,
  src: string,
  isError: boolean,
  isLoading: boolean,
  dispatch: Function
};

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
    const search: string = this.search.value;
    dispatch(imageActions.fetchImage(search));
  }

  render(): React$Element<any> {
    const { isLoading, isError, src, url } = this.props;

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
        {url && <p><a href={url}>{url}</a></p>}
      </div>
    );
  }
}

type Store = {
  +image: Map<string, any>
};

const mapState: Object = (store: Store) => ({
  src: store.image.get('src'),
  url: store.image.get('url'),
  isError: store.image.get('isError'),
  isLoading: store.image.get('isLoading')
});

export default connect(
  mapState
)(pure(CSSModules(ImageSearch, styles)));
