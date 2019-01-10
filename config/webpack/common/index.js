//const config = require( 'config' )
import { alias } from './alias'
import { rules } from './rules'
import { optimization } from './optimization'
import { output } from './output'
import { plugins } from './plugins'
import { resolve }from './resolve'
import { rules } from './rules'

import paths from '../../paths'

// Configure environment variables
dotenv.config()


export const
  devMode = process.env.NODE_ENV !== 'production'


export const webpackConfig = {
  context: paths.client,
  entry: {
    app: './index.js',
    //worker: 'webpack-dev-server/client',
  },
  mode: process.env.NODE_ENV,
  optimization,
  output,
  module: { rules },
  node: {
    fs: 'empty'
  },
  plugins,
  resolve,
}
