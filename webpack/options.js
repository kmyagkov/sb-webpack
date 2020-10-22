const path = require('path');
const { path: ROOT_DIR } = require('app-root-path');
const { isDev } = require('./utils');

const options = {
  COMPILER_OPTIONS: {
    hash: true,
    colors: true,
    version: true,
    env: true,
    modules: false,
    entrypoints: false
  },
  ROOT: ROOT_DIR,
  HOST: 'localhost',
  PORT: '3000',
  ENTRY: path.resolve(ROOT_DIR, 'src', 'index.js'),
  OUTPUT: {
    path: path.resolve(ROOT_DIR, 'dist'),
    publicPath: '/',
    filename: `js/[name].[${isDev() ? 'hash' : 'chunkhash'}].js`, // entry point bundle
    chunkFilename: 'js/[name].[chunkhash].js', // chunk name
    hashDigestLength: 8
  },
  CLEAN_WEBPACK_PLUGIN: {
    verbose: true
  },
  HTML_WEBPACK_PLUGIN: {
    template: './src/index.html'
  }
}

module.exports = options;
