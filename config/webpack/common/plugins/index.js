import path from 'path'
import Dotenv from 'dotenv-webpack'
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import CircularDependencyPlugin from './CircularDependencyPlugin'
import CleanWebpackPlugin from './CleanWebpackPlugin'
import FaviconsWebpackPlugin from './FaviconsWebpackPlugin'
import HtmlWebpackPlugins from './HtmlWebpackPlugins'
import WebpackPwaManifest from './WebpackPwaManifest'

import { devMode } from '../index'
import paths from '../../../paths'


export const plugins = [
  new Dotenv({
    // Load appropriate .env file
    path: path.resolve( paths.root,
      `.env.${ process.env.NODE_ENV || 'development' }`
    ),
    // Use .env.example like dotenv-safe
    safe: true,
    // Include system variables
    systemvars: true
  }),

  CleanWebpackPlugin,
  CircularDependencyPlugin,
  FaviconsWebpackPlugin,
  ...HtmlWebpackPlugins,
  WebpackPwaManifest,

  new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[hash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
  }),

  new LodashModuleReplacementPlugin,
]
