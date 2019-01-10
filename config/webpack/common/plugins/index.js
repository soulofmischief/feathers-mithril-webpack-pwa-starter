import Dotenv from 'dotenv-webpack'
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

import CleanWebpackPlugin from './CleanWebpackPlugin'
import FaviconsWebpackPlugin from './FaviconsWebpackPlugin'
import HtmlWebpackPlugins from './HtmlWebpackPlugins'
import WebpackPwaManifest from './WebpackPwaManifest'

import { devMode } from '../index'


export const plugins = [
  new Dotenv({
    // Use .env.example like dotenv-safe
    safe: true,
    // Include system variables
    systemvars: true
  }),

  CleanWebpackPlugin,
  FaviconsWebpackPlugin,
  ...HtmlWebpackPlugins,
  WebpackPwaManifest,

  new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[hash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
  }),

  new LodashModuleReplacementPlugin,
  new webpack.optimize.ModuleConcatenationPlugin(),
]
