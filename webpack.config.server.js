const path = require('path');

module.exports = {
  entry: './src/server.js',
  mode: 'production',
  target: 'node',
  node: {
  __dirname: false,
  __filename: false,
},
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
};
