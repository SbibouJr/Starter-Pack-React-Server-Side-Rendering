const config = require('./ecosystem.config.js');

config.name = 'prod';
config.script = 'dist/server.js';
config.watch = false;

module.exports = {
  apps: [
    config,
  ],
};
