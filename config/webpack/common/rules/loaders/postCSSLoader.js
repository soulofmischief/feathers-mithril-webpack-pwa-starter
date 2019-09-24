import path from 'path'
import paths from '../../../../paths'


export const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    config: {
      path: path.resolve( paths.root, 'config' ),
    }
  }
}
