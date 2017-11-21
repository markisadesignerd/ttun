import merge from 'webpack-merge';
import { resolve } from 'path';
import { HotModuleReplacementPlugin, NamedModulesPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import base from './webpack.base.config';

export default merge(base, {
  entry: [
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',
    
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',
    
    // app
    './index.js',
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: resolve(__dirname, './dist'),
    hot: true,
    overlay: {
      errors: true
    },
    open: true,
    port: 8080,
    publicPath: '/',
    stats: {
      children: false,
      chunks: false,
      colors: true,
      progress: true,
    },
  },
  plugins: [
    new HotModuleReplacementPlugin(), // enable HMR globally
    new NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, './index.html'),
    }),
  ],
});
