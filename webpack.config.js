var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  context: path.resolve('js'),

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './app'
  ],

  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: "bundle.js"
  },

  resolve: {
    extensions: ['', '.js']
  },

  devServer: {
    contentBase: 'public'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },

  postcss: function () {
    return [precss, autoprefixer];
  },

  watch: true,
  eslint: {
    configFile: './.eslintrc'
  }
};
