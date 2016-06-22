var path = require('path');

module.exports = {
  context: path.resolve('js'),
  entry: ["./app"],
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: "bundle.js"
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
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  watch: true,
  eslint: {
    configFile: './.eslintrc'
  }
};
