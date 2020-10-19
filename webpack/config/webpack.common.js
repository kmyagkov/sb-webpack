const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const options = require('../options');
const { isDev } = require('../utils');

module.exports = () => {
  return {
    entry: options.ENTRY,
    output: options.OUTPUT,
    mode: 'none',
    plugins: [
      new webpack.ProgressPlugin(),
      new HTMLWebpackPlugin(options.HTML_WEBPACK_PLUGIN),
      new VueLoaderPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.vue$/,
          use: {
            loader: 'vue-loader',
            options: {
              hotReload: isDev()
            }
          }
        }
      ]
    }
  }
};
