import { resolve } from 'path';
import BabelMinifyPlugin from 'babel-minify-webpack-plugin';
import merge from 'webpack-merge';

import base from './webpack.base.config';

export default merge(base, {
  entry: {
    ttun: './src/ttun.js',
    'ttun.auto': './src/ttun.auto.js'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    pathinfo: false,
    filename: '[name].min.js',
    library: 'ttun',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  devtool: false,
  plugins: [
    new BabelMinifyPlugin(),
  ],
});
