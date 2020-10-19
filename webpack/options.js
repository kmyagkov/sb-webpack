const path = require('path');
const { path: ROOT_DIR } = require('app-root-path');

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
    filename: 'bundle.js'
  },
  CLEAN_WEBPACK_PLUGIN: {
    verbose: true
  },
  HTML_WEBPACK_PLUGIN: {
    // title: 'Lectrum Webpack', не работает с чистым HTML... Возможно, нужен лоадер
    template: './src/index.html'
  }
}

module.exports = options;
