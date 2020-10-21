const webpack = require('webpack');
const chalk = require('chalk');
const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const findFreePort = require('find-free-port');
const getConfig = require('../config/webpack.dev');
const compiler = webpack(getConfig());

const { PORT, HOST, ROOT } = require('../options');
const { logSuccess } = require('../utils');

const server = new WebpackDevServer(compiler, {
  host: HOST,
  publicPath: '/',
  contentBase: path.resolve(ROOT, 'src', 'index.html'),
  watchContentBase: true,
  clientLogLevel: 'none',
  quiet: true,
  noInfo: true,
  overlay: true,
  hot: true,
  open: true
});

findFreePort(PORT)
  .then(([freePort]) => {
    server.listen(freePort, HOST, () => {
      logSuccess(`Server listening on: ${chalk.blue(`http://${HOST}:${freePort}`)}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
