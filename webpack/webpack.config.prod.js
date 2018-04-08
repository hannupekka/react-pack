const path = require('path');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const postcssFixes = require('postcss-fixes');
const cssnano = require('cssnano');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base');

const postcssOptions = {
  plugins: [
    postcssFixes(),
    autoprefixer({
      browsers: ['last 2 version', 'IE >= 9'],
    }),
    cssnano({
      safe: true,
      calc: false,
    }),
  ],
};

module.exports = merge(baseConfig, {
  mode: 'production',
  stats: {
    assets: true,
    cached: false,
    cachedAssets: false,
    children: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false,
    reasons: false,
    source: false,
  },
  devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.[hash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/html/index.prod.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: true } },
          { loader: 'postcss-loader', options: postcssOptions },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          { loader: 'postcss-loader', options: postcssOptions },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/octet-stream',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'lodash-es': 'lodash',
    },
  },
});
