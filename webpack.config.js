const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?[ac]ss$/i,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './public', to: './' },
      ],
    }),
  ],
};
