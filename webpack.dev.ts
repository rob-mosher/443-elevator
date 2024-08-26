import webpack, { Configuration as TConfiguration } from 'webpack'
import { merge } from 'webpack-merge'
import path from 'path'
import type { Configuration as TDevServerConfiguration } from 'webpack-dev-server'
import baseConfig from './webpack.config'

const configDev: TConfiguration & { devServer?: TDevServerConfiguration } = merge(baseConfig, {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/'),
    },
    port: 3000,
    devMiddleware: {
      publicPath: '/',
    },
    hot: true,
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
})

export default configDev
