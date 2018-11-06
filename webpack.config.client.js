const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  mode: 'production',
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
    path: path.resolve(__dirname, 'dist/client'),
    filename: 'bundle.js',
  },
};
