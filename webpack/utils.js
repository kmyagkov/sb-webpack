const chalk = require('chalk');

const logSuccess = (message) => {
  console.log(chalk.bold.greenBright(`\n${message}\n`));
};

const logWarning = (message) => {
  console.log(chalk.bold.yellowBright(`\n${message}\n`));
};

const logError = (message) => {
  console.log(chalk.bold.redBright(`\n${message}\n`));
};

const logInfo = (message) => {
  console.log(chalk.bold.blueBright(`\n${message}\n`));
};

const isDev = () => {
  return process.env.NODE_ENV === 'development';
}

module.exports = {
  logSuccess,
  logWarning,
  logError,
  logInfo,
  isDev
};
