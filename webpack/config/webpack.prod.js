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
      nodeEnv: 'production',
      minimize: true,
      noEmitOnErrors: true,
      removeEmptyChunks: true,
      mergeDuplicateChunks: true,
      removeAvailableModules: true,
      occurrenceOrder: true, // removed in webpack 5
      concatenateModules: true,
      providedExports: true,
      usedExports: true,
      sideEffects: true,
      namedModules: false, // removed in webpack 5
      moduleIds: false,
      namedChunks: true,
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '.',
        name: true,
        cacheGroups: {
          vendors: {
            chunks: 'initial',
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      },
      runtimeChunk: {
        name: entrypoint => `runtime.${entrypoint.name}`
      }
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
