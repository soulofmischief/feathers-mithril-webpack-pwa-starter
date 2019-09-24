//const config = require( 'config' )
import './env'
import { optimization } from './optimization'
import { output } from './output'
import { plugins } from './plugins'
import { resolve }from './resolve'
import { rules } from './rules'
import paths from '../../paths'


export const
  devMode = process.env.NODE_ENV !== 'production',
  name = 'Messages',
  shortName = 'Messages',
  title = 'Messages'


export function webpackConfig() {
  return {
    context: paths.client,
    entry: { app: './index.js' },
    mode: process.env.NODE_ENV,
    module: { rules },

    node: {
      fs: 'empty',
      perf_hooks: 'mock',
    },

    optimization,
    output,
    plugins,
    resolve,
  }
}
