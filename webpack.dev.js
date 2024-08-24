const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.js')
const path = require('path')

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/')
    },
    port: 3000,
    devMiddleware: {
      publicPath: '/'
    },
    hot: 'only'
  }
})
