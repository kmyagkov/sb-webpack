const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');

const options = require('../options');
const { loadProdCSS } = require('../modules/styles');
const getCommonConfig = require('./webpack.common');

module.exports = () => {
  const prodConfig = {
    devtool: false,
    optimization: {
      minimize: true
    },
    plugins: [
      new WebpackBundleAnalyzer({
        analyzerMode: 'disabled',
        openAnalyzer: false,
        generateStatsFile: true
      }),
      new CleanWebpackPlugin(options.CLEAN_WEBPACK_PLUGIN)
    ]
  };

  return merge(getCommonConfig(), loadProdCSS(), prodConfig);
};
