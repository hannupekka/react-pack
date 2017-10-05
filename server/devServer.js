const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('../webpack/webpack.config.dev');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: 'errors-only',
  historyApiFallback: {
    index: 'src/html/index.dev.html',
  },
}).listen(8080, '0.0.0.0', (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    return console.log(err);
  }

  // eslint-disable-next-line no-console
  return console.log('Listening at http://localhost:8080/');
});
