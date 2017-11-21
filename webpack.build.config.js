import { resolve } from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { LoaderOptionsPlugin, optimize } from 'webpack';
// import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import merge from 'webpack-merge';

import base from './webpack.base.config';
import {css, scss} from './rules/index';

export default merge(base, {
  output: {
    path: resolve(__dirname, 'dist'),
    pathinfo: false,
    filename: 'ttun.js',
    library: 'ttun',
    libraryTarget: 'umd'
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(css.use.slice(1)),
        include: css.include,
      },
    ]
  },
  plugins: [
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new optimize.UglifyJsPlugin(),
  ],
});
