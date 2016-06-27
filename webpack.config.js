var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var postcss = require('postcss');
require('es6-promise').polyfill();

module.exports = {
  context: path.resolve('js'),
  devtool: 'cheap-module-source-map',

  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './render'
    ]
  },

  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: "[name].bundle.js"
  },

  resolve: {
    extensions: ['', '.js', '.css', '.png', 'jpg']
  },

  devServer: {
    contentBase: 'public',
    hot: true,
    inline: true
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
        loader: 'url'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file"
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
