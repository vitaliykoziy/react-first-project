var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var postcss = require('postcss');
require('es6-promise').polyfill();
var port = '8080';

module.exports = {
  context: path.resolve('src'),
  devtool: 'cheap-module-source-map',

  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:'+port,
      'webpack/hot/only-dev-server',
      './index'
    ]
  },

  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/',
    filename: "[name].bundle.js"
  },

  resolve: {
    extensions: ['', '.js', '.css', '.png', '.jpg', '.json']
  },

  devServer: {
    contentBase: 'public',
    hot: true,
    inline: true,
    port: port
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss']
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: 'url?limit=50000'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  postcss: function () {
    return {
      plugins: [autoprefixer, precss],
    };
  },

  watch: true,
  eslint: {
    configFile: './.eslintrc'
  }
};
