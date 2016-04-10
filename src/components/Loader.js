import 'styles/loader.less';

import React from 'react';

const Loader = () => {
  return (
    <img
      className="loader"
      src={require('../assets/loading.gif')}
    />
  );
};

export default Loader;
