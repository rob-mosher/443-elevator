const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.js')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const plugins = []

if (process.env.ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: true
  }))
}

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/'
  },
  plugins
})
