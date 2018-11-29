const path = require('path');

module.exports = (env) => {
  const mode = env && env.MODE || 'production';
  return {
    entry: './src/server.js',
    mode,
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    plugins : [],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(css|less)$/,
          loaders:[
            'node-style-loader',
            'css-loader',
            'less-loader',
          ],
          exclude: [
            /node_modules/,
          ],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server.js',
    },
  };
};
