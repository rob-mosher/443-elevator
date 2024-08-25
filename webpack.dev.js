const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/'),
    },
    port: 3000,
    devMiddleware: {
      publicPath: '/',
    },
    hot: 'only',
  },
});
