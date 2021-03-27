const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  target: 'web',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist/umd'),
    filename: 'index.js',
    library: 'react-vr-list',
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
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
  },
};
