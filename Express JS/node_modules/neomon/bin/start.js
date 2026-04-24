#!/usr/bin/env node

const nodemon = require('nodemon');
const chalk = require('chalk');

const version = require('../package.json').version;
const option = process.argv[2] || './bin/start.js';

nodemon({ script: option, ext: 'js json' });

nodemon.on('start', function () {
  console.log(chalk.yellow(`[neomon] ${version}`));
  console.log(chalk.yellow('[neomon] to restart at any time, enter `rs'));
  console.log(chalk.green(`[neomon] starting node app`));
  console.log(chalk.green(`[neomon] starting node ${option}`));
}).on('quit', function () {
  console.log(chalk.green('[neomon] has quit'));
  process.exit();
}).on('restart', function (files) {
  console.log(chalk.green('[neomon] clean exit - waiting for changes before restart'));
  console.log(chalk.green('[neomon] restarting due to changes...'));
  console.log(chalk.green(`[neomon] restarted node ${option}`));
  console.log(chalk.green(`[neomon] file change for ${files}`));
}).on('crash', function () {
  console.log(chalk.red('[neomon] neomon crashed for some reason'));
});