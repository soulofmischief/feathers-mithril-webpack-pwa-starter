import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { devMode } from '../var'


export default new MiniCssExtractPlugin({
  // HMR doesn't work with hash names.
  filename: devMode ? '[name].css' : '[name].[hash].css',
  chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
})
