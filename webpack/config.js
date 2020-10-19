const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const options = require('./options');

module.exports = () => {
  return {
    entry: options.ENTRY,
    output: options.OUTPUT,
    mode: 'none',
    devtool: false,
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(options.CLEAN_WEBPACK_PLUGIN),
      new HTMLWebpackPlugin(options.HTML_WEBPACK_PLUGIN)
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
};
