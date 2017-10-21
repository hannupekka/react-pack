const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    publicPath: '/',
  },
  plugins: [new webpack.EnvironmentPlugin(['NODE_ENV'])],
  resolve: {
    extensions: ['.js', '.jsx', '.less'],
    modules: ['node_modules', path.resolve('./src')],
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: [/node_modules/, /styles/],
        use: ['babel-loader'],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader',
      },
    ],
  },
};
