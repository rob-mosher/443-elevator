import path from 'path'

import { merge } from 'webpack-merge'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import baseConfig from './webpack.config'

const plugins = []

if (process.env.ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: true,
  }))
}

const configProd = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
  },
  plugins,
})

export default configProd
