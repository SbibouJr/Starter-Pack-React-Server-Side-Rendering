const path = require('path');

module.exports = (env) => {
  const mode = env && env.MODE || 'production';
  console.log('MODE', mode)
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
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist/client'),
      filename: 'bundle.js',
    },
  };
};
