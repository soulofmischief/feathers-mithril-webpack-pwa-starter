
import { paths } from '../../paths'
import { optimization } from './optimization'
import { output } from './output'
import { plugins } from './plugins'
import { resolve }from './resolve'
import { rules } from './rules'



export function webpackConfig(
  env,
  argv,
  options = { name: '' }
) {
  const
    devMode = argv.mode === 'production',
    { name } = options


  return {
    context: paths[ name ].root,
    entry: { app: './index.js' },
    module: { rules },

    node: {
      fs: 'empty',
      perf_hooks: 'mock',
    },

    optimization: optimization( devMode ),
    output: output( name ),
    plugins: plugins( name ),
    resolve,
  }
}
