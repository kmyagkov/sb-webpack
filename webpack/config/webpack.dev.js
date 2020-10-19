const { merge } = require('webpack-merge');
const getCommonConfig = require('./webpack.common');

module.exports = () => {
  const devConfig = {
    devtool: false,
    mode: 'none',
    plugins: [

    ]
  }

  return merge(getCommonConfig(), devConfig);
};
