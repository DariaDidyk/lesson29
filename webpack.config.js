const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');

module.exports = {
    name: "development",
  entry: ['./src/index.js', './src/style.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin ({
      template:path.resolve(__dirname, 'src/index.html'),
    }),
  ],
};