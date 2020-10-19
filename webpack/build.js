const webpack = require('webpack');
const getConfig = require('./config/webpack.prod');
const compiler = webpack(getConfig());

const options = require('./options');
const { logSuccess, logWarning, logError } = require('./utils');

const configErrorHandler = (error) => {
  if (!error) return;
  
  console.error(error.stack || error);
  if (error.details) {
    console.error(error.details);
  }

  return true;
};

const buildErrorHandler = (stats) => {
  if (stats.hasErrors()) {
    logError('Error!');
  }

  if (stats.hasWarnings()) {
    logWarning('Warning!');
  }
};

compiler.run((error, stats) => {
  const buildInfo = stats.toString(options.COMPILER_OPTIONS);

  logSuccess('Build started...');

  if (configErrorHandler(error)) return null;

  logSuccess('Build completed!');
  console.log(buildInfo);

  buildErrorHandler(stats);
});
