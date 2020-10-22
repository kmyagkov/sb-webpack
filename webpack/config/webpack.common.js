const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WebpackBar = require('webpackbar');
const path = require('path');

const options = require('../options');
const { isDev } = require('../utils');

module.exports = () => {
  return {
    entry: options.ENTRY,
    output: options.OUTPUT,
    mode: process.env.NODE_ENV,
    plugins: [
      new webpack.ProgressPlugin(),
      new HTMLWebpackPlugin(options.HTML_WEBPACK_PLUGIN),
      new VueLoaderPlugin(),
      new WebpackBar()
    ],
    resolve: {
      alias: {

      }
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          exclude: [
            path.resolve(options.ROOT, 'src', 'assets', 'svg', 'sprite')
          ],
          use: [
            {
              loader: 'file-loader',
              options: {
                limit: 4096,
                name: 'images/[name].[contenthash].[ext]'
              }
            },
          ],
        },
        {
          test: /\.svg$/,
          include: [
            path.resolve(options.ROOT, 'src', 'assets', 'svg', 'sprite')
          ],
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                spriteFilename: 'svg/sprite.[contenthash].svg'
              }
            },
            {
              loader: 'svgo-loader'
            }
          ]
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                limit: 4096,
                name: 'fonts/[name].[contenthash].[ext]'
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
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
