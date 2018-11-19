const path = require('path');

module.exports = {
  env: {
    NODE_ENV: 'development',
    SCRIPT_PATH: path.resolve(__dirname, '../dist/client'),
    PORT: 3000,
  },
  env_production: {
    NODE_ENV: 'production',
    PORT: 3000,
  },
};
