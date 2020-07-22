/* eslint-disable babel/new-cap */
import webpack from 'webpack'

import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'
import CircularDependencyPlugin from './CircularDependencyPlugin'
import CleanWebpackPlugin from './CleanWebpackPlugin'
import FaviconsWebpackPlugin from './FaviconsWebpackPlugin'
import HtmlWebpackPlugins from './HtmlWebpackPlugins'
import WebpackPwaManifest from './WebpackPwaManifest'
import MiniCssExtractPlugin from './MiniCssExtractPlugin'

import { config } from '../../../config'
import { paths } from '../../../paths'


export const plugins = name => [
  CleanWebpackPlugin,
  CircularDependencyPlugin,
  FaviconsWebpackPlugin,
  ...HtmlWebpackPlugins,
  MiniCssExtractPlugin,
  WebpackPwaManifest,

  new webpack.DefinePlugin({
    CONFIG: JSON.stringify( config.get( name )),
    'process.env.NODE_CONFIG_DIR': JSON.stringify( paths.appConfig ),
  }),

  new LodashModuleReplacementPlugin,
]
