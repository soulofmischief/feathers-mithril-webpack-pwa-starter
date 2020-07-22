import { config } from '../../config'
import { paths } from '../../paths'


export const output = name => ({
  chunkFilename: '[name].[chunkHash].js',
  filename: '[name].[hash].js',
  globalObject: 'this',
  path: paths.client.output,
  publicPath: config.get( name ).root || '/',
})
