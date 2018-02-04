const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    publicPath: '/',
  },
  plugins: [new webpack.EnvironmentPlugin(['NODE_ENV'])],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.less'],
    alias: {
      '@app': path.resolve(__dirname, '../src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
        include: path.resolve(__dirname, '../src/'),
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
