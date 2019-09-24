import paths from '../../paths'


export const output =  {
  chunkFilename: '[name].[chunkHash].js',
  filename: '[name].[hash].js',
  globalObject: 'this',
  path: paths.output,
  publicPath: process.env.ROOT || '/',
}
