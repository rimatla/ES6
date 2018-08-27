const webpack = require('webpack');
module.exports = {
  entry: './script.js',
  output: {filename: 'bundle.js'},
  module: {
      loaders: [
          {
              test: /\.js?/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015', 'latest', 'stage-0']
              }
          }
      ]
  }
};
