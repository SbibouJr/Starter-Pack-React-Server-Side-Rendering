const config = require('./ecosystem.config.js');

config.name = 'dev';
config.script = 'dist/server.js';
config.watch = 'dist/';

module.exports = {
  apps: [
    config,
  ],
};
