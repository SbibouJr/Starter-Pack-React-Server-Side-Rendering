const config = require('./ecosystem.config.js');

config.name = 'dev';
config.script = 'src/dev_index.js';
config.watch = 'src/';

module.exports = {
  apps: [
    config,
  ],
};
