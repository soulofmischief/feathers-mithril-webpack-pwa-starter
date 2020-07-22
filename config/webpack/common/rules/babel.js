import { paths } from '../../../paths'
import { babelLoader } from './loaders'


export const babel = {
  test: /\.(js)$/,
  include: paths.client.root,
  exclude: /node_modules/,
  use: [ babelLoader ],
}
