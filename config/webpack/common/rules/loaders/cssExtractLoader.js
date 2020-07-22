import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { devMode } from '../../var'


// Extract CSS to separate files
export const cssExtractLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    hmr: devMode,
  },
}
