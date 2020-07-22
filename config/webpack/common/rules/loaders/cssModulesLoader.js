import { devMode } from '../../var'


export const cssModulesLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: devMode ? '[path][name]__[local]' : '[hash:base64]',
    },
    sourceMap: devMode,
  }
}
