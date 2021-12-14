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
        include: [
          path.resolve(__dirname, "src")
        ],
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: false,
        },
      },
      {
        enforce: 'pre',
        include: [
          path.resolve(__dirname, "src")
        ],
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  }
};
