const path = require('path');

module.exports = {
  entry: './src/index.ts',
  target: 'web',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'slidetoggle.js',
    library: 'slidetoggle',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        exclude: /\.spec.tsx?$/,
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
        options: {
          transpileOnly: false,
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  }
};
