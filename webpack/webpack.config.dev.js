const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const postcssFixes = require('postcss-fixes');
const baseConfig = require('./webpack.base');

const postcssOptions = {
  sourceMap: true,
  plugins: [
    postcssFixes(),
    autoprefixer({
      browsers: ['last 2 version', 'IE >= 9'],
    }),
  ],
};

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    'eventsource-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!isomorphic-fetch',
    }),
  ],
  optimization: {
    namedModules: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: postcssOptions,
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: postcssOptions,
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader',
      },
    ],
  },
});
