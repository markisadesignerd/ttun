import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

// import { DefinePlugin, ProvidePlugin } from 'webpack';
// import Dotenv from 'dotenv-webpack';
import EslintFriendlyFormatter from 'eslint-friendly-formatter';
//
// import {css, scss} from './rules/index';
// import pkg from '../package.json';

export default {
  entry: './src/ttun.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'ttun.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: EslintFriendlyFormatter,
            }
          },
        ],
        include: [
          resolve(__dirname, '../src'),
        ],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: resolve(__dirname, '../src'),
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              // sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer,
              ],
            },
          },
        ],
        include: resolve(__dirname, './src'),
      },
    ],
  },
  plugins: [
  ],
};
