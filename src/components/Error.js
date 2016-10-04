// @flow
import styles from 'styles/components/Error';
import React from 'react';
import CSSModules from 'react-css-modules';

type Props = {
  message: string
}

const Error = ({ message }: Props): ElementType => {
  return (
    <div styleName="error">
      {message}
    </div>
  );
};

export default CSSModules(Error, styles);
