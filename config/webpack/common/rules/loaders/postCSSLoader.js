import { paths } from '../../../../paths'


export const postCSSLoader = {
  loader: 'postcss-loader',
  options: { config: { path: paths.config }}
}
