const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const options = require('../options');
const getCommonConfig = require('./webpack.common');

module.exports = () => {
  const prodConfig = {
    devtool: false,
    mode: 'none',
    plugins: [
      new CleanWebpackPlugin(options.CLEAN_WEBPACK_PLUGIN)
    ]
  };

  return merge(getCommonConfig(), prodConfig);
};
