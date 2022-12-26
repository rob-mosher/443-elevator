const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.s?[ac]ss$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/')
    },
    port: 3000,
    devMiddleware: {
      publicPath: 'http://localhost:3000/dist/'
    },
    hot: 'only'
  },
  plugins: []
}
