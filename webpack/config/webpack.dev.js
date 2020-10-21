const { merge } = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const getCommonConfig = require('./webpack.common');

const { loadDevCSS } = require('../modules/styles');

module.exports = () => {
  const devConfig = {
    devtool: 'cheap-module-eval-source-map',
    plugins: [
      new FriendlyErrorsPlugin()
    ]
  }

  return merge(getCommonConfig(), loadDevCSS(), devConfig);
};
