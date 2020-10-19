const webpack = require('webpack');
const chalk = require('chalk');
const WebpackDevServer = require('webpack-dev-server');
const WebpackHotMW = require('webpack-hot-middleware');
const findFreePort = require('find-free-port');
const getConfig = require('./config');
const compiler = webpack(getConfig());

const { PORT, HOST } = require('./options');
const { logSuccess, logError } = require('./utils');

const server = new WebpackDevServer(compiler, {
  host: HOST,
  publicPath: '/',
  contentBase: '/',
  clientLogLevel: 'error',
  noInfo: true,
  overlay: true,
  hot: true,

  after(app) {
    app.use(WebpackHotMW(compiler, { log: false }));
  }
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


