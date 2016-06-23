var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  context: path.resolve('js'),

  entry: {
    hotReload: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server'
    ],
    home: './home'

  },

  output: {
    path: path.resolve('build/js/'),
    publicPath: 'http://localhost:8080/public/assets/js/',
    filename: "[name].bundle.js"
  },

  resolve: {
    extensions: ['', '.js', '.css']
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
        loaders: [
          'react-hot',
          'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
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
