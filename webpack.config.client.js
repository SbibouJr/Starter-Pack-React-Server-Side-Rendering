const path = require('path');

module.exports = (env) => {
  const mode = env && env.MODE || 'production';
  return {
    entry: './src/client/',
    mode,
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
            'style-loader',
            'css-loader',
            'less-loader',
          ],
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist/client'),
      filename: 'bundle.js',
    },
  };
};
